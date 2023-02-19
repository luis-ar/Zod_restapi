import { Router } from "express";
import { login } from "../controllers/auth.controllers";
import { schemaValition } from "../middlewares/schemavalidator";
import { loginSchema } from "../schemas/auth.schema";
 
const router = Router();

router.post("/login",schemaValition(loginSchema),login);

export default router;
