import { Request, Response, NextFunction } from "express";
import { geolocalization } from "../services/geolocalization.service";

export const geolocalizaitor = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    
    try {
        const addressData = await geolocalization(id);
        res.status(200).json(addressData);
    } catch(error) {
        next(error);
    }
}