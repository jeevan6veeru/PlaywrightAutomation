export declare class apiUtils {
    apiContext: any;
    loginPayLoad: string;
    constructor(apiContext: any, loginPayLoad: string);
    getToken(): Promise<any>;
    createOrder(orderPayLoad: string): Promise<{
        token: StringConstructor;
        orderId: StringConstructor;
    }>;
}
