import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import { getRepository } from "typeorm";
import { Adm, CartProduct, Market, Supplier, Buy } from "../entities";

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

export const isBuyOwnerCheck = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const cartProductRepository = getRepository(CartProduct);
    const buyRepository = getRepository(Buy);

    try {
        const buy = await buyRepository.findOne(id);

        const radomCartProduct = await cartProductRepository.findOne({where: {buy}});

        const marketId = radomCartProduct?.cart?.marketId;

        if (marketId === req.currentUser.id) {
            req.isAuthorized = true;
        }

        next();
    } catch(error) {
        next(new AppError("Buy not found", 404));
    }
}

export const isMarketCheck = (req: Request, res: Response, next: NextFunction) => {
    const marketRepository = getRepository(Market);

    const market = marketRepository.findOne(req.currentUser.id);

    if (market === undefined){
        next(new AppError("No market permission", 401));
    } else {
        next();
    }
}