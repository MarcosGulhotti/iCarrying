import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import { getRepository } from "typeorm";
import { Adm, Market, Supplier } from "../entities";

export const isAdmCheck = async (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthorized) {
        return next();
    }

    const admRepository = getRepository(Adm);

    try {
        const adm = await admRepository.findOne(req.currentUser.id)

        if (adm !== undefined) {
            next();
        } else {
            next(new AppError("No authorization", 401))
        }
    } catch(error) {
        next(new AppError("No authorization", 401))
    }

}

export const isMarketOwnerCheck = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const marketRepository = getRepository(Market); 

    const market = await marketRepository.findOne(req.currentUser.id)


    if (market?.id === id && id !== undefined) {
        req.isAuthorized = true;
    }

    next();
}

export const isSupplierOwnerCheck = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const supplierRepository = getRepository(Supplier); 

    const supplier = await supplierRepository.findOne(req.currentUser.id)

    if (supplier?.id === id && id !== undefined) {
        req.isAuthorized = true;
    }

    next();
}