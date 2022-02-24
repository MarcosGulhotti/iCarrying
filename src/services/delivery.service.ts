import {getRepository} from "typeorm";
import {Buy, Delivery, Trucks} from "../entities";
import AppError from "../errors/AppError";

interface IDeliveryBody {
    status: string;
    address: string;
    buy_id: string;
    trucks_id: string;
}

interface IUpDelivery {
    status: string;
}

export const createDelivery = async (body: IDeliveryBody) => {
    try {
        const deliveryRepository = getRepository(Delivery);
        const truckRepository = getRepository(Trucks);
        const buyRepository = getRepository(Buy);

        const truck = await truckRepository.findOne(body.trucks_id);

        if (truck == undefined) {
            throw new AppError("Truck not found", 404);
        }

        const buy = await buyRepository.findOne(body.buy_id);

        if (buy == undefined) {
            throw new AppError("Buy not found", 404);
        }

        const data = {
            status: body.status,
            address: body.address,
            trucks: truck,
            buy: buy,
        };

        const delivery = deliveryRepository.create(data);

        await deliveryRepository.save(delivery);

        return delivery;
    } catch (error) {
        throw new AppError((error as any).message, 400);
    }
};

export const getDeliveryById = async (deliveryId: string) => {
    const deliveryRepository = getRepository(Delivery);

    try {
        const delivery = await deliveryRepository.findOne(deliveryId);

        if (delivery !== undefined) {
            return delivery;
        } else {
            throw new AppError("Delivery not found", 404);
        }
    } catch (error) {
        throw new AppError("Delivery not found", 404);
    }
};

export const getAllDeliverys = async () => {
    const deliveryRepository = getRepository(Delivery);

    const delivery = await deliveryRepository.find();

    return delivery;
};

export const deleteDelivery = async (id: string) => {
    try {
        const deliveryRepository = getRepository(Delivery);

        const delivery = await deliveryRepository.findOne({
            where: {
                id: id,
            },
        });

        if (delivery === undefined) {
            throw new AppError("Delivery not exists", 404);
        }

        await deliveryRepository.delete(delivery);

        return "deleted";
    } catch (error) {
        throw new AppError((error as any).message, 400);
    }
};

export const upDelivery = async (deliveryId: string, body: IUpDelivery) => {
    const deliveryRepository = getRepository(Delivery);

    try {
        const delivery = await deliveryRepository.findOne(deliveryId);
        if (delivery !== undefined) {
            await deliveryRepository.save({...delivery, ...body});

            return delivery;
        } else {
            throw new AppError("Delivery not found", 404);
        }
    } catch (error) {
        throw new AppError((error as any).message, 400);
    }
};
