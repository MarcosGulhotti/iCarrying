import {addToCart, seeCart} from "../services/cartProduct.service";
import {Request, Response, NextFunction} from "express";

export const addInCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const {productId} = req.params;
    const currentUser = req.currentUser;
    try {
        const addedProduct = await addToCart(productId, currentUser);
        res.status(201).json(addedProduct);
    } catch (error) {
        next(error);
    }
};

export const seeProductsCart = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const currentUser = req.currentUser;
    try {
        const cart = await seeCart(currentUser);
        res.status(201).json(cart);
    } catch (error) {
        next(error);
    }
};
