// Definição da interface IUser para tipagem dos dados do usuário
export interface IUser {
  id: number;
  name: string;
  login: string;
  password: string;
}

export interface IUserFormData {
  name: string;
  login: string;
  password: string;
}
