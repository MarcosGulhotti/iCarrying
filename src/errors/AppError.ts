class AppError {
    message: any;
    status: number;

    constructor(message: any, status: number) {
        this.message = message;
        this.status = status;
    }
}

export default AppError;