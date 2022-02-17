import { Request, Response, NextFunction } from "express";
import { createTruck, listAllTrucks, listTruckById, updateTruck, deleteTruck } from "../services/trucks.service";

export const registerTruck = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const truck = await createTruck(req.validateData);
        res.status(201).json(truck);
    } catch(error) {
        next(error);
    }
}

export const getOneTruckById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    
    try {
        const truck = await listTruckById(id);
        res.status(200).json(truck);
    } catch(error) {
        next(error);
    }
}

export const getAllTrucks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const trucks = await listAllTrucks();
        res.status(200).json(trucks);
    } catch(error) {
        next(error);
    }
}

export const updateOneTruck = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const truck = await updateTruck(req);
        res.status(201).json(truck);
    } catch(error) {
        next(error);
    }
}

export const deleteOneTruck = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    
    try {
        await deleteTruck(id);
        res.status(204).json({});
    } catch(error) {
        next(error);
    }
}
