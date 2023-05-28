import { Router } from "express";
import { registragionValidation } from "../validations/registration.validation";
import UserController from "../controllers/UserController";

const User = new UserController();
const router = Router()

router.post("/create", registragionValidation, User.create);
router.get("/:id", User.get);

export default router;