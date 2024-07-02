import pool from "../database/dbConfig";

interface Review {
  id?: number;
  user_id: number;
  team_id: number;
  scores: any;
}

class ReviewModel {
  async create(review: Review): Promise<Review> {
    const { user_id, team_id, scores } = review;
    const result = await pool.query(
      "INSERT INTO reviews (user_id, team_id, scores) VALUES ($1, $2, $3) RETURNING *",
      [user_id, team_id, scores]
    );
    return result.rows[0];
  }

  async findAll(): Promise<Review[] | null> {
    const result = await pool.query("SELECT * FROM reviews");
    return result.rows || null;
  }

  async findById(id: number): Promise<Review | null> {
    const result = await pool.query("SELECT * FROM reviews WHERE id = $1", [id]);
    return result.rows[0] || null;
  }

  async update(id: number, review: Partial<Review>): Promise<Review | null> {
    const fields: string[] = [];
    const values: any[] = [];
    let query = "UPDATE reviews SET ";

    Object.keys(review).forEach((key, index) => {
      fields.push(`${key} = $${index + 1}`);
      values.push((review as any)[key]);
    });

    query +=
      fields.join(", ") +
      " WHERE id = $" +
      (fields.length + 1) +
      " RETURNING *";
    values.push(id);

    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  async delete(id: number): Promise<void> {
    await pool.query("DELETE FROM reviews WHERE id = $1", [id]);
  }
}

export { Review, ReviewModel };
