import { getRepository } from "typeorm";
import { Suplier } from "../entities/Suplier";
import AppError from "../errors/AppError";

interface IResgisterSuplier {
  name: string;
  cnpj: string;
  email: string;
  password: string;
  address: string;
}

interface IUpdateSuplier {
  name?: string;
  email?: string;
  password?: string;
  address?: string;
  cnpj?: string;
  id?: string;
  grade?: string;
}

const removePassword = (suplierInfos: Suplier) => {
  const { id, name, cnpj, email, address, grade } = suplierInfos;

  const suplierNoPassword = { id, name, cnpj, email, address, grade };

  return suplierNoPassword;
};

export const createSuplier = async (body: IResgisterSuplier) => {
  try {
    const suplierRepository = getRepository(Suplier);

    const suplier = suplierRepository.create(body);
    await suplierRepository.save(suplier);

    const output = removePassword(suplier);

    return output;
  } catch (e) {
    throw new AppError((e as any).message, 400);
  }
};

export const getSuplierById = async (id: string) => {
  try {
    const suplierRepository = getRepository(Suplier);

    const suplier = await suplierRepository.findOne(id);

    if (suplier === undefined) {
      throw new AppError("suplier not exists", 400);
    }

    const output = removePassword(suplier);

    return output;
  } catch (e) {
    throw new AppError((e as any).message, 400);
  }
};

export const getAllSupliers = async () => {
  try {
    const suplierRepository = getRepository(Suplier);

    const supliers = await suplierRepository.find();

    return supliers;
  } catch (e) {
    throw new AppError((e as any).message, 400);
  }
};

export const updateSuplier = async (id: string, data: IUpdateSuplier) => {
  try {
    const suplierRepository = getRepository(Suplier);

    const suplier = await suplierRepository.findOne(id);

    if (data.id || data.password || data.cnpj || data.grade) {
      throw new AppError(
        "you can't change id, password, grade or cnpj using this rote",
        401
      );
    }

    if (suplier === undefined) {
      throw new AppError("suplier not exists", 400);
    }

    const newSuplier = await suplierRepository.save({
      ...suplier,
      ...data,
    });

    const noPassword = removePassword(newSuplier);

    return noPassword;
  } catch (e) {
    throw new AppError((e as any).message, 400);
  }
};

export const deleteSuplier = async (id: string) => {
  try {
    const suplierRepository = getRepository(Suplier);

    const suplier = await suplierRepository.findOne(id);

    if (suplier === undefined) {
      throw new AppError("suplier not exists", 400);
    }

    await suplierRepository.delete(suplier);

    return "deleted";
  } catch (e) {
    throw new AppError((e as any).message, 400);
  }
};
