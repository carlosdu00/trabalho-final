import { Router } from "express";
import teamController from "../controllers/teamController";
import { validateTeam } from "../middlewares/validationMiddleware";

const router = Router();

router.post("/", validateTeam, teamController.createTeam);
router.get("/", teamController.getTeams);
router.get("/:id", teamController.getTeam);
router.put("/:id", validateTeam, teamController.updateTeam);
router.delete("/:id", teamController.deleteTeam);

export default router;