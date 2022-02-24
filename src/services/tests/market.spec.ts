import { createConnection, getConnection, getRepository } from "typeorm";
import { createMarket, getAllMarkets } from "../market.service";
import { Market } from "../../entities/Market";
import { createSupplier, getAllSuppliers } from "../supplier.service";
import { Adm, Product, Supplier, Trucks } from "../../entities";
import { loginInAdm, loginInMarket, loginInSupplier } from "../login.service";
import { createAdm, getAllAdms } from "../adm.service";
import { createProduct, listAllProducts } from "../product.service";
import { createTruck, listAllTrucks } from "../trucks.service";

describe("Market Tests", () => {
  beforeAll(async () => {
    await createConnection();
  });

  afterAll(async () => {
    const defaultConnection = getConnection("default");
    await defaultConnection.close();
  });
  const mockMarket = {
    name: "market",
    cnpj: "31.222.555/0000-55",
    email: "marketm@mail.com",
    password: "12345678",
    address: "rua Polina, 123",
  };

  it("Should list all Markets", async () => {
    const markets = await getAllMarkets();

    expect(markets).toHaveProperty("map");
  });
  it("Should create a Market", async () => {
    const marketRepo = getRepository(Market);

    const exist = await marketRepo.findOne({
      where: { cnpj: mockMarket.cnpj },
    });

    if (exist === undefined) {
      const newMarket = await createMarket(mockMarket);

      expect(newMarket).toHaveProperty("id");
    } else {
      expect(exist).toHaveProperty("id");
    }
  });
  it("Should Login", async () => {
    const marketRepo = getRepository(Market);

    const exists = await marketRepo.findOne({
      where: { cnpj: mockMarket.cnpj },
    });

    if (exists === undefined) {
      throw new Error("Market not exists");
    }
    const data = { email: mockMarket.email, password: mockMarket.password };
    const login = await loginInMarket(data);

    expect(login).not.toBeUndefined();
  });
});

describe("Supplier Test", () => {
  beforeAll(async () => {
    await createConnection();
  });

  afterAll(async () => {
    const defaultConnection = getConnection("default");
    await defaultConnection.close();
  });

  const mockSupplier = {
    name: "junin",
    cnpj: "33.444.666/0001-58",
    email: "junin@mail.com",
    password: "12345678",
    address: "rua dos bobos 123",
  };

  it("Should list all Suppliers", async () => {
    const supliers = await getAllSuppliers();

    expect(supliers).toHaveProperty("map");
  });
  it("Should Create a Supplier", async () => {
    const supplierRepo = getRepository(Supplier);

    const exists = await supplierRepo.findOne({
      where: { cnpj: mockSupplier.cnpj },
    });

    if (exists === undefined) {
      const newSupplier = await createSupplier(mockSupplier);

      expect(newSupplier).toHaveProperty("id");
    } else {
      expect(exists).toHaveProperty("id");
    }
  });
  it("Should Login", async () => {
    const supplierRepo = getRepository(Supplier);

    const exists = await supplierRepo.findOne({
      where: { cnpj: mockSupplier.cnpj },
    });

    if (exists === undefined) {
      throw new Error("Supplier not exists");
    }
    const data = { email: mockSupplier.email, password: mockSupplier.password };
    const login = await loginInSupplier(data);

    expect(login).not.toBeUndefined();
  });
});

describe("Adm Test", () => {
  beforeAll(async () => {
    await createConnection();
  });

  afterAll(async () => {
    const defaultConnection = getConnection("default");
    await defaultConnection.close();
  });

  const mockAdm = {
    name: "Adm3",
    email: "adm3@mail.com",
    password: "12345678",
  };

  it("Should list all Adms", async () => {
    const Adms = await getAllAdms();

    expect(Adms).toHaveProperty("map");
  });
  it("Should Create a Adm", async () => {
    const AdmRepo = getRepository(Adm);

    const exists = await AdmRepo.findOne({
      where: { email: mockAdm.email },
    });

    if (exists === undefined) {
      const newAdm = await createAdm(mockAdm);

      expect(newAdm).toHaveProperty("id");
    } else {
      expect(exists).toHaveProperty("id");
    }
  });
  it("Should Login", async () => {
    const AdmRepo = getRepository(Adm);

    const exists = await AdmRepo.findOne({
      where: { email: mockAdm.email },
    });

    if (exists === undefined) {
      throw new Error("Adm not exists");
    }
    const data = { email: mockAdm.email, password: mockAdm.password };
    const login = await loginInAdm(data);

    expect(login).not.toBeUndefined();
  });
});

describe("Products Test", () => {
  beforeAll(async () => {
    await createConnection();
  });

  afterAll(async () => {
    const defaultConnection = getConnection("default");
    await defaultConnection.close();
  });
  const mockProducts = {
    name: "coca",
    price: "9",
    description: "calabresa",
    image:
      "https://superprix.vteximg.com.br/arquivos/ids/176449-600-600/Oleo-de-Soja-Soya-900ml.png?v=636470371263970000",
  };

  it("Should list all Products", async () => {
    const Products = await listAllProducts();

    expect(Products).toHaveProperty("map");
  });
  it("Should create a product", async () => {
    const supplierRepo = getRepository(Supplier);
    const productRepo = getRepository(Product);

    const supplier = await supplierRepo.findOne({
      where: { cnpj: "33.444.666/0001-58" },
    });
    if (supplier === undefined) {
      throw new Error("Supplier doesn't exists");
    }

    const alreadyHaveProduct = await productRepo.findOne({
      where: { suplier: supplier, name: mockProducts.name },
    });

    if (alreadyHaveProduct) {
      expect(alreadyHaveProduct).toHaveProperty("id");
    } else {
      const newProduct = await createProduct(mockProducts, supplier.id);

      expect(newProduct).toHaveProperty("id");
    }
  });
});

describe("Truck Test", () => {
  beforeAll(async () => {
    await createConnection();
  });

  afterAll(async () => {
    const defaultConnection = getConnection("default");
    await defaultConnection.close();
  });
  const mockTruck = {
    plate: "AAA6666",
  };

  it("Should list all Trucks", async () => {
    const Truck = await listAllTrucks();

    expect(Truck).toHaveProperty("map");
  });
  it("Should create a truck", async () => {
    const truckRepo = getRepository(Trucks);

    const exist = await truckRepo.findOne({
      where: { plate: mockTruck.plate },
    });

    if (exist === undefined) {
      const newtruck = await createTruck(mockTruck);

      expect(newtruck).toHaveProperty("id");
    } else {
      expect(exist).toHaveProperty("id");
    }
  });
});
