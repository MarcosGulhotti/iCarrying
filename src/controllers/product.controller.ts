import { Request, Response, NextFunction } from "express";
import {
  createProduct,
  deleteProduct,
  listAllProducts,
  listAllProductsFromSupplier,
  listProductById,
  updateProduct,
} from "../services/product.service";

export const createProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const newProduct = await createProduct(data, id);

    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const listProductByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const product = await listProductById(id);

    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const listAllProductsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await listAllProducts();

    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const listAllProductsFromSupplierController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const product = await listAllProductsFromSupplier(id);

    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const updateProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { currentUser } = req;
    const data = req.body;

    const product = await updateProduct(data, id, currentUser.id);

    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const deleteProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { currentUser } = req;

    const product = await deleteProduct(id, currentUser.id);

    return res.status(204).json(product);
  } catch (error) {
    next(error);
  }
};
