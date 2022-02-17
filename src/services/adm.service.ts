import { getRepository } from "typeorm";
import { Adm } from "../entities";
import AppError from "../errors/AppError";
import bcrypt from "bcrypt";

interface IRegisterBody {
    name: string;
    email: string;
    password: string;
}

interface IUpdateBody {
    name?: string;
    email?: string;
    password?: string;
}

const removePassword = (amdInfos: Adm) => {
    const { id, name, email } = amdInfos;

    const admNoPassword = { id, name, email };

    return admNoPassword;
}

export const createAdm = async (body: IRegisterBody) => {
    try {
        const admRepository = getRepository(Adm);
        
        const adm = admRepository.create(body);

        await admRepository.save(adm);

        const admNoPassword = removePassword(adm);

        return admNoPassword;
    } catch (error) {
        throw new AppError((error as any).message, 400);
    }
}

export const getAdmById = async (admId: string) => {
    const admRepository = getRepository(Adm);

    try {
        const adm = await admRepository.findOne(admId)

        if (adm !== undefined) {
            const admNoPassword = removePassword(adm);

            return admNoPassword;
        } else {
            throw new AppError("Adm not found", 404);
        }
    } catch(error) {
        throw new AppError("Adm not found", 404);
    }
}

export const getAllAdms = async () => {
    const admRepository = getRepository(Adm);

    const adms = await admRepository.find();

    const admsNoPassword = adms.map(adm => removePassword(adm));

    return admsNoPassword;
}

export const patchAdm = async (admId: string, body: IUpdateBody) => {
    const admRepository = getRepository(Adm);

    if (body.password) {
        body.password = bcrypt.hashSync(body.password, 8);
    }

    try {
        const adm = await admRepository.findOne(admId);
        if (adm !== undefined) {
            await admRepository.save({...adm, ...body});
        } else {
            throw new AppError("Adm not found", 404);
        }
    } catch(error) {
        throw new AppError((error as any).message, 400);
    }
}

export const delAdm = async (admId: string) => {
    const admRepository = getRepository(Adm);

    try {
        const deleteResult = await admRepository.delete(admId);

        if(deleteResult.affected === 0) {
            throw new AppError("Adm not found", 404);
        }
    } catch(error) {
        throw new AppError("Adm not found", 404)
    }
}