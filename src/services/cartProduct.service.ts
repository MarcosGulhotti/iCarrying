import { getRepository } from "typeorm";
import { Product, Cart, CartProduct, Market } from "../entities";
import AppError from "../errors/AppError";

export const addToCart = async (productId: string, currentUser: Market) => {
  const productRepository = getRepository(Product);
  const cartRepository = getRepository(Cart);
  const cartProductRepository = getRepository(CartProduct);

  try {
    const product = await productRepository.findOne(productId);
    if (product === undefined) {
      throw new AppError("Product not found.", 404);
    }
    const cart = await cartRepository.findOne({
      where: { marketId: currentUser.id },
    });

    if (cart === undefined) {
      throw new AppError("Missing market permission.", 401);
    }

    const data = { status: "pending", product: product, cart: cart };
    const addedProduct = cartProductRepository.create(data);
    await cartProductRepository.save(addedProduct);
    return addedProduct;
  } catch (error) {
    throw new AppError((error as any).message, 400);
  }
};
