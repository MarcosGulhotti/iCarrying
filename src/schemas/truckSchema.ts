import * as yup from "yup";

export const TruckSchema = yup.object().shape({
    plate: yup.string().matches(/[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/, "Incorrect format for plate. The format must be AAA0000 or AAA0A00").required()
})