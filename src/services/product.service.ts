import { getRepository } from "typeorm";
import { Product } from "../entities/Product";
import { Supplier } from "../entities/Supplier";
import AppError from "../errors/AppError";

interface IregisterProduct {
  name: string;
  price: string;
  description: string;
  image: string;
}

interface IupdateProduct {
  name?: string;
  price?: string;
  description?: string;
  image?: string;
}

const removeSupplier = (product: Product) => {
  const { id, name, price, description, image } = product;

  const newProduct = {
    id,
    name,
    price,
    description,
    image,
    supplierId: product.supplier.id,
  };

  return newProduct;
};

export const createProduct = async (
  data: IregisterProduct,
  supplierID: string
) => {
  try {
    const productRepository = getRepository(Product);
    const supplierRepository = getRepository(Supplier);

    const supplier = await supplierRepository.findOne(supplierID);

    if (supplier === undefined) {
      throw new AppError("You don't have supplier permissions", 400);
    }

    const productExists = await productRepository.findOne({
      where: { supplier: supplier, name: data.name },
    });

    if (productExists) {
      throw new AppError("Supplier already have this product", 400);
    }

    const product = productRepository.create({ ...data, supplier: supplier });

    await productRepository.save(product);

    return removeSupplier(product);
  } catch (error) {
    throw new AppError((error as any).message, 400);
  }
};

export const listProductById = async (id: string) => {
  try {
    const productRepository = getRepository(Product);

    const product = await productRepository.findOne(id);

    if (product === undefined) {
      throw new AppError("Product not exists", 400);
    }

    return product;
  } catch (error) {
    throw new AppError((error as any).message, 400);
  }
};

export const listAllProducts = async () => {
  try {
    const productRepository = getRepository(Product);

    const products = await productRepository.find();

    return products;
  } catch (error) {
    throw new AppError((error as any).message, 400);
  }
};

export const listAllProductsFromSupplier = async (supplierID: string) => {
  try {
    const productRepository = getRepository(Product);

    const products = await productRepository.find({
      where: { supplier: supplierID },
    });

    return products;
  } catch (error) {
    throw new AppError((error as any).message, 400);
  }
};

export const updateProduct = async (
  data: IupdateProduct,
  id: string,
  supplierID: string
) => {
  try {
    const productRepository = getRepository(Product);
    const supplierRepository = getRepository(Supplier);

    const supplier = await supplierRepository.findOne(supplierID);

    if (supplier === undefined) {
      throw new AppError("Supplier not exists", 400);
    }

    const product = await productRepository.findOne({
      where: {
        supplier: supplier,
        id: id,
      },
    });
    if (product === undefined) {
      throw new AppError(
        "Product not exists or its not from this supplier",
        400
      );
    }

    const newProduct = await productRepository.save({
      ...product,
      ...data,
    });

    return newProduct;
  } catch (error) {
    throw new AppError((error as any).message, 400);
  }
};

export const deleteProduct = async (id: string, supplierID: string) => {
  try {
    const productRepository = getRepository(Product);
    const supplierRepository = getRepository(Supplier);

    const supplier = await supplierRepository.findOne(supplierID);

    if (supplier === undefined) {
      throw new AppError("Supplier not exists", 400);
    }

    const product = await productRepository.findOne({
      where: {
        supplier: supplier,
        id: id,
      },
    });
    if (product === undefined) {
      throw new AppError(
        "Product not exists or its not from this supplier",
        400
      );
    }
    await productRepository.delete(product);

    return "deleted";
  } catch (error) {
    throw new AppError((error as any).message, 400);
  }
};
