import { Router } from "express";
import reviewController from "../controllers/reviewController";
import { validateReview } from "../middlewares/validationMiddleware";

const router = Router();

router.post("/", validateReview, reviewController.createReview);
router.get("/", reviewController.getReviews);
router.get("/:id", reviewController.getReview);
router.put("/:id", validateReview, reviewController.updateReview);
router.delete("/:id", reviewController.deleteReview);

export default router;