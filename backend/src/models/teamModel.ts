import pool from "../database/dbConfig";

interface Team {
  id?: number;
  name: string;
}

class TeamModel {
  async create(team: Team): Promise<Team> {
    const { name } =
      team;
    const result = await pool.query(
      "INSERT INTO teams (name) VALUES ($1) RETURNING *",
      [name]
    );
    return result.rows[0];
  }

  async findAll(): Promise<Team[] | null> {
    const result = await pool.query("SELECT * FROM teams");
    return result.rows || null;
  }

  async findById(id: number): Promise<Team | null> {
    const result = await pool.query("SELECT * FROM teams WHERE id = $1", [id]);
    return result.rows[0] || null;
  }

  async update(id: number, team: Partial<Team>): Promise<Team | null> {
    const fields: string[] = [];
    const values: any[] = [];
    let query = "UPDATE teams SET ";

    Object.keys(team).forEach((key, index) => {
      fields.push(`${key} = $${index + 1}`);
      values.push((team as any)[key]);
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
    await pool.query("DELETE FROM teams WHERE id = $1", [id]);
  }
}

export { Team, TeamModel

 };