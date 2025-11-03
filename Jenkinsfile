pipeline {
  agent any

  environment {
    // Set Node environment and email settings (if needed)
    ALLURE_RESULTS = 'allure-results'
    ALLURE_REPORT = 'allure-report'
  }

  stages {

    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Install Playwright Browsers') {
      steps {
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Run Playwright Tests') {
      steps {
        sh 'npx playwright test'
      }
    }

    stage('Generate Allure Report') {
      steps {
        // Generate Allure HTML report from test results
        sh 'allure generate allure-results -o allure-report --clean'
      }
    }

    stage('Publish Allure Report') {
      steps {
        // Publish report in Jenkins UI
        allure([
          includeProperties: false,
          jdk: '',
          results: [[path: 'allure-results']]
        ])
      }
    }
  }

  post {
    always {
      // Archive Allure report as artifact
      archiveArtifacts artifacts: 'allure-report/**', followSymlinks: false
    }
    failure {
      echo '❌ Tests Failed! Check Allure report for details.'
      emailext(
        subject: "❌ Playwright Tests Failed - ${env.JOB_NAME} #${env.BUILD_NUMBER}",
        body: "Please check Jenkins for Allure report: ${env.BUILD_URL}",
        to: 'jeevan6veeru@gmail.com'
      )
    }
    success {
      echo '✅ Tests Passed Successfully!'
      emailext(
        subject: "✅ Playwright Tests Passed - ${env.JOB_NAME} #${env.BUILD_NUMBER}",
        body: "All tests passed! View Allure report here: ${env.BUILD_URL}",
        to: 'jeevan6veeru@gmail.com'
      )
    }
  }
}
