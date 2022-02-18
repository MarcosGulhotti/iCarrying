import { getRepository } from "typeorm";
import { Market, Supplier, Adm } from "../entities";
import AppError from "../errors/AppError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface ILoginData {
  email: string;
  password: string;
}

export const loginInMarket = async (data: ILoginData) => {
  const { email, password } = data;
  const marketRepository = getRepository(Market);
  const market = await marketRepository.findOne({ email });

  if (!market) {
    throw new AppError("Market not found on our database", 401);
  }

  const myPassword = await marketRepository.findOne({
    select: ["password"],
    where: { email },
  });

  const match = bcrypt.compareSync(password, myPassword!.password);

  if (!match) {
    throw new AppError("Market email and password missmatch", 401);
  }
  let token = jwt.sign({ user: market }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRESIN,
  });

  return token;
};

export const loginInSupplier = async (data: ILoginData) => {
  const { email, password } = data;
  const supplierRepository = getRepository(Supplier);
  const supplier = await supplierRepository.findOne({ email });

  if (!supplier) {
    throw new AppError("Supplier not found on our database", 401);
  }

  const myPassword = await supplierRepository.findOne({
    select: ["password"],
    where: { email },
  });

  const match = bcrypt.compareSync(password, myPassword!.password);

  if (!match) {
    throw new AppError("Supplier email and password missmatch", 401);
  }

  let token = jwt.sign({ user: supplier }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRESIN,
  });

  return token;
};

export const loginInAdm = async (data: ILoginData) => {
  const { email, password } = data;
  const admRepository = getRepository(Adm);
  const adm = await admRepository.findOne({ email });

  if (!adm) {
    throw new AppError("Admin not found on our database", 401);
  }

  const myPassword = await admRepository.findOne({
    select: ["password"],
    where: { email },
  });

  const match = bcrypt.compareSync(password, myPassword!.password);

  if (!match) {
    throw new AppError("Admin email and password missmatch", 401);
  }

  let token = jwt.sign({ user: adm }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRESIN,
  });

  return token;
};
