import { Request, Response, NextFunction } from 'express'
import { loginInMarket, loginInSupplier } from '../services/login.service'


export const marketLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = await loginInMarket(req.body);
        res.status(200).json({token});
    } catch(error) {
        next(error);
    }
}

export const supplierLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = await loginInSupplier(req.body);
        res.status(200).json({token});
    } catch(error) {
        next(error);
    }
}