import * as yup from "yup";

export const CreateProductSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  image: yup.string().required(),
});
