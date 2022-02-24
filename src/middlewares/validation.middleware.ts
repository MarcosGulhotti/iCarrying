import { Request, Response, NextFunction } from "express";

import * as yup from "yup";
import AppError from "../errors/AppError";

export const validate = (schema: yup.AnyObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    try {
        req.validateData = await schema.validate(body, { abortEarly: false, stripUnknown: true});
        next()
    } catch (error) {
        next(new AppError({errors: (error as any).errors}, 400));
    }
}