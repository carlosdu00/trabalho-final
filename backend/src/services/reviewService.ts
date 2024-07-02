import { Review, ReviewModel } from "../models/reviewModel";

class ReviewService {
  private reviewModel: ReviewModel;

  constructor() {
    this.reviewModel = new ReviewModel();
  }

  async createReview(reviewData: Review): Promise<Review> {
    return this.reviewModel.create(reviewData);
  }

  async getAllReviews(): Promise<Review[] | null> {
    return this.reviewModel.findAll();
  }

  async getReviewById(id: number): Promise<Review | null> {
    return this.reviewModel.findById(id);
  }

  async updateReview(
    id: number,
    updateData: Partial<Review>
  ): Promise<Review | null> {
    return this.reviewModel.update(id, updateData);
  }

  async deleteReview(id: number): Promise<void> {
    return this.reviewModel.delete(id);
  }
}

export default new ReviewService();