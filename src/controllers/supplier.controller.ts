import { Request, Response, NextFunction } from "express";
import {
  createSupplier,
  getSupplierById,
  getAllSuppliers,
  updateSupplier,
  deleteSupplier,
} from "../services/supplier.service";

export const registerSupplierController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const supplier = await createSupplier(req.validateData);
    return res.status(201).json(supplier);
  } catch (e) {
    next(e);
  }
};

export const listSupplierByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const supplier = await getSupplierById(id);

    return res.status(200).json(supplier);
  } catch (e) {
    next(e);
  }
};

export const listAllSuppliersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const suppliers = await getAllSuppliers();

    return res.status(200).json(suppliers);
  } catch (e) {
    next(e);
  }
};

export const updateSupplierController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const { currentUser } = req;
    const userID = currentUser.id;

    const supplier = await updateSupplier(id, data, userID);
    return res.status(200).json(supplier);
  } catch (e) {
    next(e);
  }
};

export const deleteSupplierController = async (
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
