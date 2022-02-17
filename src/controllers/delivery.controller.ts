import {Request, Response, NextFunction} from "express";
import {
    createDelivery,
    getAllDeliverys,
    getDeliveryById,
} from "../services/delivery.service";

export const registerDelivery = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const delivery = await createDelivery(req.validateData);
        res.status(201).json(delivery);
    } catch (error) {
        next(error);
    }
};

export const getDelivery = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const {id} = req.params;

    try {
        const delivery = await getDeliveryById(id);
        res.status(200).json(delivery);
    } catch (error) {
        next(error);
    }
};

export const listDeliverys = async (req: Request, res: Response) => {
    const deliverys = await getAllDeliverys();

    res.status(200).json(deliverys);
};
