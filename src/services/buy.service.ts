import { getRepository } from "typeorm";
import { Buy, CartProduct, Market, Cart } from "../entities";
import AppError from "../errors/AppError";

export const buy = async (currentUser: Market) => {
    const buyRepository = getRepository(Buy);
    const CartProductRepository = getRepository(CartProduct);
    const cartRepository = getRepository(Cart);

    const cart = await cartRepository.findOne({where: {marketId: currentUser.id}});

    if (cart === undefined) {
        throw new AppError("User no permission", 401);
    }

    const buy = buyRepository.create({status: "sending"});
    await buyRepository.save(buy);

    const cartProducts = await CartProductRepository.find({where: {status: "pending", cart}});

    if (cartProducts.length === 0) {
        throw new AppError("No products in cart", 400);
    }

    for (let i = 0; i < cartProducts.length; i++) {
        const currentBuy = await CartProductRepository.save({...cartProducts[i], status: "finished", buy});
    }

    return buy;
}