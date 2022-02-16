import { Request, Response, NextFunction } from "express";
import { createProduct } from "../services/product.service";

export const createProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = req.body;

    console.log(id)

    const newProduct = await createProduct(data, id);

    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};
