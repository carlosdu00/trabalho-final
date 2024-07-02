import { Team, TeamModel } from "../models/teamModel";

class TeamService {
  private teamModel: TeamModel;

  constructor() {
    this.teamModel = new TeamModel();
  }

  async createTeam(teamData: Team): Promise<Team> {
    return this.teamModel.create(teamData);
  }

  async getAllTeams(): Promise<Team[] | null> {
    return this.teamModel.findAll();
  }

  async getTeamById(id: number): Promise<Team | null> {
    return this.teamModel.findById(id);
  }

  async updateTeam(
    id: number,
    updateData: Partial<Team>
  ): Promise<Team | null> {
    return this.teamModel.update(id, updateData);
  }

  async deleteTeam(id: number): Promise<void> {
    return this.teamModel.delete(id);
  }
}

export default new TeamService();