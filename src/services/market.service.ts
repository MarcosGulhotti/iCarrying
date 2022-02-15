import { getRepository } from "typeorm";
import { Market, Cart } from "../entities";
import AppError from "../errors/AppError";

interface IRegisterBody {
    name: string;
    cnpj: string;
    email: string;
    address: string;
}

const removePassword = (marketInfos: Market) => {
    const {id, name, cnpj, email, address, cartId} = marketInfos;

    const marketNoPassword = {id, name, cnpj, email, address, cartId};

    return marketNoPassword;
}

export const createMarket = async (body: IRegisterBody) => {
    try {
        const marketRepository = getRepository(Market);
        const cartRepository = getRepository(Cart);

        const cart = cartRepository.create({});

        await cartRepository.save(cart);

        const market = marketRepository.create({...body, cartId: cart});

        await marketRepository.save(market);

        await cartRepository.save({...cart, marketId: market})

        const marketNoPassword = removePassword(market);

        return marketNoPassword;
    } catch (error) {
        throw new AppError((error as any).message, 400);
    }
}

export const getMarketById = async (marketId: string) => {
    const marketRepository = getRepository(Market);
    
    try {
        const market = await marketRepository.findOne(marketId);

        if (market !== undefined) {
            const marketNoPassword = removePassword(market);

            return marketNoPassword;
        } else {
            throw new AppError("Market not found", 404);
        }
    } catch (error) {
        throw new AppError("Market not found", 404);
    }
}