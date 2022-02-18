import { Request, Response, NextFunction} from "express";
import { buy } from "../services/buy.service";

export const purchase = async (req: Request, res: Response, next: NextFunction) => {
    const { currentUser } = req;

    try {
        const purchaseData = await buy(currentUser);

        res.status(200).json(purchaseData);
    } catch(error) {
        next(error);
    }
}