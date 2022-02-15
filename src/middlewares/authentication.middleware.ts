import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (token === undefined) {
        return next(new AppError("Missing authorization headres", 401));
    }

    jwt.verify(token, process.env.SECRET as string, (error: any, decoded: any) => {
        if (error) {
            return next(new AppError("Unauthorized", 401));
        }

        req.currentUser = decoded.user;

        next();
    });
}