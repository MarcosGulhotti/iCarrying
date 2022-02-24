import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { CartProduct } from "../entities";
import { transport, mailTemplateOptions } from "../services/email.service";
import { buy, getBuyById } from "../services/buy.service";

export const purchase = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { currentUser } = req;

  try {
    const purchaseData = await buy(currentUser);
    const cartProductRepository = getRepository(CartProduct);
    const cartProducts = await cartProductRepository.find({
      where: {
        status: "finished",
        buy: purchaseData,
      },
      relations: ["product"],
    });

    const products = cartProducts.map((cartProduct) => cartProduct.product);

    const options = mailTemplateOptions(
      currentUser.email,
      "Purchase Confirmation.",
      "buy",
      {
        name: currentUser.name,
        products: products,
      }
    );

    transport.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
    res.status(200).json(purchaseData);
  } catch (error) {
    next(error);
  }
};


export const getBuy = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
        const buy = await getBuyById(id);
        res.status(200).json(buy);
    } catch(error) {
        next(error);
    }
}
