import { Router } from "express";
import userController from "../controllers/userController";
import { validateUser } from "../middlewares/validationMiddleware";

const router = Router();

router.post("/", validateUser, userController.createUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.put("/:id", validateUser, userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;