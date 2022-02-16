import { getRepository } from "typeorm";
import { Market, Cart } from "../entities";
import AppError from "../errors/AppError";

interface IRegisterBody {
    name: string;
    cnpj: string;
    email: string;
    password: string;
    address: string;
}

interface IUpdateBody {
    name?: string;
    cnpj?: string;
    email?: string;
    password?: string;
    address?: string;
}

const removePassword = (marketInfos: Market) => {
    const {id, name, cnpj, email, address, cart} = marketInfos;

    const marketNoPassword = {id, name, cnpj, email, address, cart};

    return marketNoPassword;
}

export const createMarket = async (body: IRegisterBody) => {
    try {
        const marketRepository = getRepository(Market);
        const cartRepository = getRepository(Cart);

        const market = marketRepository.create({...body});

        await marketRepository.save(market);

        const cart = cartRepository.create({marketId: market.id});

        await cartRepository.save(cart);

        await marketRepository.save({...market, cart: cart})

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

export const getAllMarkets = async () => {
    const marketRepository = getRepository(Market);

    const markets = await marketRepository.find();

    const marketsNoPassword = markets.map(market => removePassword(market));

    return marketsNoPassword;
}

export const patchMarket = async (marketId: string, body: IUpdateBody) => {
    const marketRepository = getRepository(Market);

    try {
        const market = await marketRepository.findOne(marketId);
        if (market !== undefined) {
            await marketRepository.save({...market, ...body});
        } else {
            throw new AppError("Market not found", 404);
        }
    } catch (error) {
        throw new AppError((error as any).message, 400);
    }
}

export const delMarket = async (marketId: string) => {
    const marketRepository = getRepository(Market);
    const deleteResult = await marketRepository.delete(marketId);
    
    if(deleteResult.affected === 0) {
        throw new AppError("Market not found", 404);
    }
}