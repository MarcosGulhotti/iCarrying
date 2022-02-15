import { Request, Response, NextFunction } from "express";
import { createMarket, getMarketById } from "../services/market.service";

export const registerMarket = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const market = await createMarket(req.validateData);
        res.status(201).send(market);
    } catch (error) {
        next(error);
    }
}

export const getMarket = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
        const market = await getMarketById(id);
        res.status(200).send(market);
    } catch(error) {
        next(error);
    }
}