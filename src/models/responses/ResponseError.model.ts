export class ResponseError{
    statusCode: number;
    message: string;

    public static readonly INVALID_EMAIL = new ResponseError(401, "Bad email");
    public static readonly INVALID_PASSWORD = new ResponseError(401, "Bad password");

    protected constructor(statusCode: number, message: string){
        this.statusCode = statusCode;
        this.message = message;
    }


}