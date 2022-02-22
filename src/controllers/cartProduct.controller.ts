import { addToCart } from "../services/cartProduct.service";
import { Request, Response, NextFunction } from "express";

export const addInCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { productId } = req.params;
  const currentUser = req.currentUser;
  try {
    const addedProduct = await addToCart(productId, currentUser);
    res.status(201).json(addedProduct);
  } catch (error) {
    next(error);
  }
};
