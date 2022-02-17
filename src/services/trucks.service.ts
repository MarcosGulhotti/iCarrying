import { Request } from "express"
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

export const listTruckById = async (id: string) => {
    try {
      const truckRepository = getRepository(Trucks);
  
      const truck = await truckRepository.findOne(id);
  
      if (truck === undefined) {
        throw new AppError("Truck does not exist", 400);
      }
  
      return truck;

    } catch (error) {
      throw new AppError((error as any).message, 400);
    }
  };

export const listAllTrucks = async () => {
    try {
      const truckRepository = getRepository(Trucks);
  
      const trucks = await truckRepository.find();
  
      return trucks;
    } catch (error) {
      throw new AppError((error as any).message, 400);
    }
  };

export const updateTruck = async (req: Request) => {
    try {
      const { id } = req.params

      const truckRepository = getRepository(Trucks);
  
      const truck = await truckRepository.findOne(id);
  
      if (truck === undefined) {
        throw new AppError("Truck does not exist", 400);
      }
      
      await truckRepository.update(id, req.body)
      const newTruck = await truckRepository.findOne(id);
  
      return newTruck;
    } catch (error) {
      throw new AppError((error as any).message, 400);
    }
  };

export const deleteTruck = async (id: string) => {
    const truckRespository = getRepository(Trucks);

    try {
        const deleteResult = await truckRespository.delete(id);

        if(deleteResult.affected === 0) {
            throw new AppError("Truck not found", 404);
        }
    } catch(error) {
        throw new AppError("Truck not found", 404)
    }
}