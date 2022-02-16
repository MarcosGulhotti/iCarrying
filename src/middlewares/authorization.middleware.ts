import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import { getRepository } from "typeorm";
import { Adm } from "../entities";

export const isAdmCheck = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthorized) {
        return next();
    }

    const { id } = req.currentUser;

    const admRepository = getRepository(Adm);

    try {
        const adm = admRepository.findOne(id);

        if (adm !== undefined) {
            next();
        } else {
            next(new AppError("No authorization", 401))
        }
    } catch(error) {
        next(new AppError("No authorization", 401))
    }
}

export const isOwnerCheck = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (req.currentUser?.id === id) {
        req.isAuthorized = true;
    }

    next();
}