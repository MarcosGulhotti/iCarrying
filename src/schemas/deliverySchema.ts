import * as yup from "yup";

export const CreateDeliverySchema = yup.object().shape({
    status: yup.string().required(),
    buy_id: yup.string().required(),
    trunks_id: yup.string().required(),
});

export const updateDeliverySchema = yup.object().shape({
    status: yup.string().required(),
});
