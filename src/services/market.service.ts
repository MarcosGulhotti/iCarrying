import { getRepository } from "typeorm";
import { Market, Cart } from "../entities";

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
        console.log(error);
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
            console.log("market not found");
        }
    } catch (error) {
        console.log(error);
    }
}