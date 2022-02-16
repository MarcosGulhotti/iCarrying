import { Request, Response, NextFunction } from "express";
import { createMarket, delMarket, getAllMarkets, getMarketById, patchMarket } from "../services/market.service";

export const registerMarket = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const market = await createMarket(req.validateData);
        res.status(201).json(market);
    } catch (error) {
        next(error);
    }
}

export const getMarket = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
        const market = await getMarketById(id);
        res.status(200).json(market);
    } catch(error) {
        next(error);
    }
}

export const listMarkets = async (req: Request, res: Response) => {
    const markets = await getAllMarkets();

    res.status(200).json(markets);
}

export const updateMarket = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        await patchMarket(id,req.body);
        res.status(204).json({});
    } catch(error) {
        next(error);
    }
}

export const removeMarket = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        await delMarket(id);
        res.status(204).json({});
    } catch(error) {
        next(error);
    }
}