import {
  CreateUser,
  UserRecoverPassword,
  UserSignIn,
  ViewUser,
} from '../entities/user.entity';

export interface IUserRepository {
  findByUsername(username: string): Promise<ViewUser>;
  deleteUser(id: string): Promise<void>;
}

export interface IUserAuthRepository {
  register(user: CreateUser): Promise<ViewUser>;
  recoverPassword(data: UserRecoverPassword): Promise<void>;
  signIn(data: UserSignIn): Promise<string>;
}
