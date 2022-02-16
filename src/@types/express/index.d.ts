declare namespace Express {
    interface Request {
        validateData?: any;
        currentUser?: any;
        isAuthorized?: boolean;
    }
}