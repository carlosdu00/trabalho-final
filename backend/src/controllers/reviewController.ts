import { Request, Response } from "express";
import reviewService from "../services/reviewService";

class ReviewController {
    async createReview(req: Request, res: Response): Promise<Response> {
        try {
            const review = await reviewService.createReview(req.body);
            return res.status(201).json(review);
        } catch (error) {
            return res.status(500).json({ error: "Error creating review" });
        }
    }

    async getReviews(req: Request, res: Response): Promise<Response> {
        try {
            const reviews = await reviewService.getAllReviews();
            if (reviews) {
                return res.status(200).json(reviews);
            }
            return res.status(404).json({ error: "Reviews not found" });
        } catch (error) {
            return res.status(500).json({ error: "Error fetching reviews" });
        }
    }

    async getReview(req: Request, res: Response): Promise<Response> {
        try {
            const review = await reviewService.getReviewById(Number(req.params.id));
            if (review) {
                return res.status(200).json(review);
            }
            return res.status(404).json({ error: "Review not found" });
        } catch (error) {
            return res.status(500).json({ error: "Error fetching review" });
        }
    }

    async updateReview(req: Request, res: Response): Promise<Response> {
        try {
            const review = await reviewService.updateReview(
                Number(req.params.id),
                req.body
            );
            if (review) {
                return res.status(200).json(review);
            }
            return res.status(404).json({ error: "Review not found" });
        } catch (error) {
            return res.status(500).json({ error: "Error updating review" });
        }
    }

    async deleteReview(req: Request, res: Response): Promise<Response> {
        try {
            await reviewService.deleteReview(Number(req.params.id));
            return res.status(200).json({ message: "Review deleted successfully" });
        } catch (error) {
            return res.status(500).json({ error: "Error deleting review" });
        }
    }
}

export default new ReviewController();