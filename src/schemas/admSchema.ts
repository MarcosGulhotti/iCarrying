import * as yup from "yup";

export const CreateAdmSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
})

export const UpdateAdmSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    password: yup.string().min(8)
})