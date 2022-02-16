import { getRepository } from "typeorm";
import { Trucks } from "../entities";
import AppError from "../errors/AppError";

interface IBody {
    plate: string;
}

export const createTruck = async (body: IBody) => {
    try {
        const truckRepository = getRepository(Trucks);

        const truck = truckRepository.create(body);

        await truckRepository.save(truck);

        return truck;
    } catch(error) {
        throw new AppError((error as any).message, 400);
    }
}