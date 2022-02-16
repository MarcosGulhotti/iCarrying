import { getRepository } from "typeorm";
import { Market, Suplier } from "../entities";
import AppError from "../errors/AppError";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


interface ILoginData {
    email: string,
    password: string
}

export const loginInMarket = async (data: ILoginData) => {
    const { email, password } = data;
    const marketRepository = getRepository(Market)
    const market = await marketRepository.findOne({email})
    
    if (!market) {
      throw new AppError("Market not found on our database", 401)
  }

    const myPassword = await marketRepository.findOne({
      select: ['password'],
      where: { email }
    })

    const match = bcrypt.compareSync(password, myPassword!.password);

    if (!match) {
      throw new AppError("Market email and password missmatch", 401)
    }

    let token = jwt.sign({ email: market.email }, process.env.JWT_SECRET as string, {
      expiresIn: process.env.JWT_EXPIRESIN,
    });
  
    
    return token
}

export const loginInSupplier = async (data: ILoginData) => {
  const { email, password } = data;
  const supplierRepository = getRepository(Suplier)
  const supplier = await supplierRepository.findOne({email})
  
  if (!supplier) {
    throw new AppError("Supplier not found on our database", 401)
}

  const myPassword = await supplierRepository.findOne({
    select: ['password'],
    where: { email }
  })

  const match = bcrypt.compareSync(password, myPassword!.password);

  if (!match) {
    throw new AppError("Supplier email and password missmatch", 401)
  }

  let token = jwt.sign({ email: supplier.email }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRESIN,
  });

  
  return token
}
