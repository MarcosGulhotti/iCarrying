import { Request, Response, NextFunction} from "express";
import { buy, getBuyById } from "../services/buy.service";

export const purchase = async (req: Request, res: Response, next: NextFunction) => {
    const { currentUser } = req;

    try {
        const purchaseData = await buy(currentUser);

        res.status(200).json(purchaseData);
    } catch(error) {
        next(error);
    }
}

export const getBuy = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
        const buy = await getBuyById(id);
        res.status(200).json(buy);
    } catch(error) {
        next(error);
    }
}