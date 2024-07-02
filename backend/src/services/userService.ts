import { User, UserModel } from "../models/userModel";

class UserService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  async createUser(userData: User): Promise<User> {
    return this.userModel.create(userData);
  }

  async getAllUsers(): Promise<User[] | null> {
    return this.userModel.findAll();
  }

  async getUserById(id: number): Promise<User | null> {
    return this.userModel.findById(id);
  }

  async updateUser(
    id: number,
    updateData: Partial<User>
  ): Promise<User | null> {
    return this.userModel.update(id, updateData);
  }

  async deleteUser(id: number): Promise<void> {
    return this.userModel.delete(id);
  }
}

export default new UserService();