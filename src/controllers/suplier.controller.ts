import { Request, Response, NextFunction } from "express";
import {
  createSuplier,
  deleteSuplier,
  getAllSupliers,
  getSuplierById,
  updateSuplier,
} from "../services/suplier.service";

export const registerSuplierController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const suplier = await createSuplier(req.validateData);
    return res.status(201).json(suplier);
  } catch (e) {
    next(e);
  }
};

export const listSuplierByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const suplier = await getSuplierById(id);

    return res.status(200).json(suplier);
  } catch (e) {
    next(e);
  }
};

export const listAllSupliersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const supliers = await getAllSupliers();

    return res.status(200).json({ data: supliers });
  } catch (e) {
    next(e);
  }
};

export const updateSuplierController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const suplier = await updateSuplier(id, data);
    return res.status(200).json(suplier);
  } catch (e) {
    next(e);
  }
};

export const deleteSuplierController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    await deleteSuplier(id);

    return res.status(204).json("deleted");
  } catch (e) {
    next(e);
  }
};
