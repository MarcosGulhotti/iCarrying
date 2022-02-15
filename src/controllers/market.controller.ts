import { Request, Response, NextFunction } from "express";
import { createMarket } from "../services/market.service";

export const registerMarket = async (req: Request, res: Response) => {
    try {
        const market = await createMarket(req.body);
        res.status(201).send(market);
    } catch (error) {
        console.log(error);
    }
}