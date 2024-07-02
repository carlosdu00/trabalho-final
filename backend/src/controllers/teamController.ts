import { Request, Response } from "express";
import teamService from "../services/teamService";

class TeamController {
    async createTeam(req: Request, res: Response): Promise<Response> {
        try {
            const team = await teamService.createTeam(req.body);
            return res.status(201).json(team);
        } catch (error) {
            return res.status(500).json({ error: "Error creating team" });
        }
    }

    async getTeams(req: Request, res: Response): Promise<Response> {
        try {
            const teams = await teamService.getAllTeams();
            if (teams) {
                return res.status(200).json(teams);
            }
            return res.status(404).json({ error: "Teams not found" });
        } catch (error) {
            return res.status(500).json({ error: "Error fetching teams" });
        }
    }

    async getTeam(req: Request, res: Response): Promise<Response> {
        try {
            const team = await teamService.getTeamById(Number(req.params.id));
            if (team) {
                return res.status(200).json(team);
            }
            return res.status(404).json({ error: "Team not found" });
        } catch (error) {
            return res.status(500).json({ error: "Error fetching team" });
        }
    }

    async updateTeam(req: Request, res: Response): Promise<Response> {
        try {
            const team = await teamService.updateTeam(
                Number(req.params.id),
                req.body
            );
            if (team) {
                return res.status(200).json(team);
            }
            return res.status(404).json({ error: "Team not found" });
        } catch (error) {
            return res.status(500).json({ error: "Error updating team" });
        }
    }

    async deleteTeam(req: Request, res: Response): Promise<Response> {
        try {
            await teamService.deleteTeam(Number(req.params.id));
            return res.status(200).json({ message: "Team deleted successfully" });
        } catch (error) {
            return res.status(500).json({ error: "Error deleting team" });
        }
    }
}

export default new TeamController();