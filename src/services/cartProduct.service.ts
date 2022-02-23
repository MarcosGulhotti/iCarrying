import {getRepository} from "typeorm";
import {Product, Cart, CartProduct, Market} from "../entities";
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
        const cart = await cartRepository.findOne({
            where: {marketId: currentUser.id},
        });

        if (cart === undefined) {
            throw new AppError("Missing market permission.", 401);
        }

        const data = {status: "pending", product: product, cart: cart};
        const addedProduct = CartProductRepository.create(data);
        await CartProductRepository.save(addedProduct);
        return addedProduct;
    } catch (error) {
        throw new AppError((error as any).message, 400);
    }
};

export const seeCart = async (currentUser: Market) => {
    const cartRepository = getRepository(Cart);
    const cartProductRepository = getRepository(CartProduct);

    const cart = await cartRepository.findOne({
        where: {marketId: currentUser.id},
    });

    if (cart === undefined) {
        throw new AppError("Cart not found", 404);
    }

    const cartProducts = await cartProductRepository.find({
        where: {cart: cart.id},
        relations: ["product"],
    });

    const products = cartProducts.map(elem => elem.product);

    if (products.length === 0) {
        throw new AppError("empty cart", 404);
    }

    return products;
};
