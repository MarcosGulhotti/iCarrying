import { Request, Response, NextFunction } from "express";
import { createAdm, delAdm, getAdmById, getAllAdms, patchAdm } from "../services/adm.service";

export const registerAdm = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const adm = await createAdm(req.validateData);
        res.status(201).json(adm);
    } catch(error) {
        next(error);
    }
}

export const getAdm = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
        const adm = await getAdmById(id);
        res.status(200).json(adm);
    } catch(error) {
        next(error);
    }
}

export const listAdms = async (req: Request, res: Response) => {
    const adms = await getAllAdms();

    res.status(200).json(adms);
}

export const updateAdm = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        await patchAdm(id, req.validateData);
        res.status(204).json({});
    } catch(error) {
        next(error);
    }
}

export const removeAdm = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        await delAdm(id);
        res.status(204).json({})
    } catch(error) {
        next(error);
    }
}