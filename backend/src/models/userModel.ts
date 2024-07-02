// src/models/userModel.ts
import pool from "../database/dbConfig";

interface User {
  id?: number;
  name: string;
  login: string;
  password: string;
}

class UserModel {
  async create(user: User): Promise<User> {
    const { name, login, password } =
      user;
    const result = await pool.query(
      "INSERT INTO users (name, login, password) VALUES ($1, $2, $3) RETURNING *",
      [name, login, password]
    );
    return result.rows[0];
  }

  async findAll(): Promise<User[] | null> {
    const result = await pool.query("SELECT * FROM users");
    return result.rows || null;
  }

  async findById(id: number): Promise<User | null> {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0] || null;
  }

  async update(id: number, user: Partial<User>): Promise<User | null> {
    const fields: string[] = [];
    const values: any[] = [];
    let query = "UPDATE users SET ";

    Object.keys(user).forEach((key, index) => {
      fields.push(`${key} = $${index + 1}`);
      values.push((user as any)[key]);
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
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
  }
}

export { User, UserModel };