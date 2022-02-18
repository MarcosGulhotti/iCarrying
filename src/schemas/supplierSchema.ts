import * as yup from "yup";

export const CreateSupplierSchema = yup.object().shape({
    name: yup.string().required(),
    cnpj: yup.string().matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,"incorrect cnpj format, correct format is XX.XXX.XXX/XXXX-XX").required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    address: yup.string().required()
})