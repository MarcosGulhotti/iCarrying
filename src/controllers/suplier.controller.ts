import { Request, Response, NextFunction } from "express";
import {
  createSupplier,
  deleteSupplier,
  getAllSuppliers,
  getSupplierById,
  updateSupplier,
} from "../services/suplier.service";

export const registerSuplierController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const suplier = await createSupplier(req.validateData);
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
    const suplier = await getSupplierById(id);

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
    const supliers = await getAllSuppliers();

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
    const { currentUser } = req;
    const userID = currentUser.id;

    const suplier = await updateSupplier(id, data, userID);
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
    const { currentUser } = req;
    const userID = currentUser.id;

    await deleteSupplier(id, userID);

    return res.status(204).json("deleted");
  } catch (e) {
    next(e);
  }
};
