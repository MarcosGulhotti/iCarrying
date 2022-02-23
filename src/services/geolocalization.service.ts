import { Iageo } from "iageo/dist";
import { IaddressFullDetails, IIageoError } from "iageo/dist/types/interfaces";
import { Delivery, Supplier, Market } from "../entities";
import { getRepository } from "typeorm";
import AppError from "../errors/AppError";

const instaceOfIaddressFullDetails = (data: any): data is IaddressFullDetails => {
    return true;
}
const instaceOfIIageoError = (data: any): data is IIageoError => {
    return true;
}

export const geolocalization = async (id: string) => {
    const deliveryRepository = getRepository(Delivery);
    const supplierRepository = getRepository(Supplier);
    const marketRepository = getRepository(Market);

    try {
    const delivery = await deliveryRepository.findOne(id);
    const supplier = await supplierRepository.findOne(id);
    const market = await marketRepository.findOne(id);

    if(delivery === undefined && supplier === undefined && market === undefined) {
        throw new AppError("Id not found", 404);
    }

    let address: string = "";

    if(delivery !== undefined) {
        address = delivery.address;
    } else if(supplier !== undefined) {
        address = supplier.address
    } else if(market !== undefined) {
        address = market.address;
    }

    const geolocalization = new Iageo();

    const geolocalizationData = await geolocalization.geolocalizer(address);

    if(geolocalizationData === undefined) {
        throw new Error("Iageo not work")
    } else if(instaceOfIaddressFullDetails(geolocalizationData)) {
        return geolocalizationData;
    } else if(instaceOfIIageoError(geolocalization)) {
        throw new AppError(geolocalization.message, 404);
    }

    } catch (error) {
        console.log(error);
        throw new AppError("Id not found", 404);
    }
}