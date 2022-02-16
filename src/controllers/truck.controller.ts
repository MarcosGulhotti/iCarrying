import { Request, Response, NextFunction } from "express";
import { createTruck } from "../services/trukcs.service";

export const registerTruck = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const truck = await createTruck(req.validateData);
        res.status(201).json(truck);
    } catch(error) {
        next(error);
    }
}