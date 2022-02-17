import { Router } from "express";

import { getAdm, listAdms, registerAdm, removeAdm, updateAdm } from "../controllers/adm.controller";
import { validate } from "../middlewares/validation.middleware";
import { CreateAdmSchema, UpdateAdmSchema } from "../schemas/admSchema";
import { isAuthenticated } from "../middlewares/authentication.middleware";
import { isAdmCheck } from "../middlewares/authorization.middleware";

const router = Router();

export const admRouter = () => {
    router.post("", validate(CreateAdmSchema),/* isAuthenticated, isAdmCheck,*/ registerAdm);
    router.get("/:id", getAdm);
    router.get("", listAdms);
    router.patch("/:id", validate(UpdateAdmSchema),/* isAuthenticated, isAdmCheck,*/ updateAdm);
    router.delete("/:id",/* isAuthenticated, isAdmCheck,*/ removeAdm);

    return router;
}