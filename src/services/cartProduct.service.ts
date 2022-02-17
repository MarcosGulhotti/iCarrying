import { getRepository } from "typeorm";
import { Product, Cart, CartProduct, Market } from "../entities";
import AppError from "../errors/AppError";

export const addToCart = async (productId: string, currentUser: Market) => {
  const productRepository = getRepository(Product);
  const cartRepository = getRepository(Cart);
  const CartProductRepository = getRepository(CartProduct);

  try {
    const product = await productRepository.findOne(productId);
    if (product === undefined) {
      throw new AppError("Product not found.", 404);
    }
    const cart = currentUser.cart;

    const data = { status: "pending", product: product, cart: cart };
    const addedProduct = CartProductRepository.create(data);
    await CartProductRepository.save(addedProduct);
    return addedProduct;
  } catch (error) {
    throw new AppError((error as any).message, 400);
  }
};
