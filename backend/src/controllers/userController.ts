import { Request, Response } from "express";
import userService from "../services/userService";

class UserController {
    async createUser(req: Request, res: Response): Promise<Response> {
        try {
            const user = await userService.createUser(req.body);
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ error: "Error creating user" });
        }
    }

    async getUsers(req: Request, res: Response): Promise<Response> {
        try {
            const users = await userService.getAllUsers();
            if (users) {
                return res.status(200).json(users);
            }
            return res.status(404).json({ error: "Users not found" });
        } catch (error) {
            return res.status(500).json({ error: "Error fetching users" });
        }
    }

    async getUser(req: Request, res: Response): Promise<Response> {
        try {
            const user = await userService.getUserById(Number(req.params.id));
            if (user) {
                return res.status(200).json(user);
            }
            return res.status(404).json({ error: "User not found" });
        } catch (error) {
            return res.status(500).json({ error: "Error fetching user" });
        }
    }

    async updateUser(req: Request, res: Response): Promise<Response> {
        try {
            const user = await userService.updateUser(
                Number(req.params.id),
                req.body
            );
            if (user) {
                return res.status(200).json(user);
            }
            return res.status(404).json({ error: "User not found" });
        } catch (error) {
            return res.status(500).json({ error: "Error updating user" });
        }
    }

    async deleteUser(req: Request, res: Response): Promise<Response> {
        try {
            await userService.deleteUser(Number(req.params.id));
            return res.status(200).json({ message: "User deleted successfully" });
        } catch (error) {
            return res.status(500).json({ error: "Error deleting user" });
        }
    }
}

export default new UserController();