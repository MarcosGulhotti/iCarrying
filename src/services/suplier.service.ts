import { getRepository } from "typeorm";
import { Supplier } from "../entities/Supplier";
import AppError from "../errors/AppError";

interface IResgisterSupplier {
  name: string;
  cnpj: string;
  email: string;
  password: string;
  address: string;
}

interface IUpdateSupplier {
  name?: string;
  email?: string;
  password?: string;
  address?: string;
  cnpj?: string;
  id?: string;
  grade?: string;
}

const removePassword = (supplierInfos: Supplier) => {
  const { id, name, cnpj, email, address, grade } = supplierInfos;

  const supplierNoPassword = { id, name, cnpj, email, address, grade };

  return supplierNoPassword;
};

export const createSupplier = async (body: IResgisterSupplier) => {
  try {
    const supplierRepository = getRepository(Supplier);

    const supplier = supplierRepository.create(body);
    await supplierRepository.save(supplier);

    const output = removePassword(supplier);

    return output;
  } catch (e) {
    throw new AppError((e as any).message, 400);
  }
};

export const getSupplierById = async (id: string) => {
  try {
    const supplierRepository = getRepository(Supplier);

    const supplier = await supplierRepository.findOne(id);

    if (supplier === undefined) {
      throw new AppError("supplier not exists", 400);
    }

    const output = removePassword(supplier);

    return output;
  } catch (e) {
    throw new AppError((e as any).message, 400);
  }
};

export const getAllSuppliers = async () => {
  try {
    const supplierRepository = getRepository(Supplier);

    const suppliers = await supplierRepository.find();

    return suppliers;
  } catch (e) {
    throw new AppError((e as any).message, 400);
  }
};

export const updateSupplier = async (id: string, data: IUpdateSupplier, userID: string) => {
  try {
    const supplierRepository = getRepository(Supplier);

    const supplier = await supplierRepository.findOne(id);

    if (supplier === undefined) {
      throw new AppError("supplier not exists", 400);
    }

    if(userID !== supplier.id){
      throw new AppError("User is not Owner of this supplier", 401)
    }

    if (data.id || data.password || data.cnpj || data.grade) {
      throw new AppError(
        "you can't change id, password, grade or cnpj using this rote",
        401
      );
    }


    const newSupplier = await supplierRepository.save({
      ...supplier,
      ...data,
    });

    const noPassword = removePassword(newSupplier);

    return noPassword;
  } catch (e) {
    throw new AppError((e as any).message, 400);
  }
};

export const deleteSupplier = async (id: string, userID: string) => {
  try {
    const supplierRepository = getRepository(Supplier);

    const supplier = await supplierRepository.findOne(id);

    if (supplier === undefined) {
      throw new AppError("supplier not exists", 400);
    }

    if(userID !== supplier.id){
      throw new AppError("User is not Owner of this supplier", 401)
    }


    await supplierRepository.delete(supplier);

    return "deleted";
  } catch (e) {
    throw new AppError((e as any).message, 400);
  }
};
