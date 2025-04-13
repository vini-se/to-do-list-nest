import {
  CreateUser,
  UserRecoverPassword,
  ViewUser,
} from '../entities/user.entity';

export abstract class UserAuthRepository {
  abstract register(user: CreateUser): Promise<ViewUser>;
  abstract recoverPassword(data: UserRecoverPassword): Promise<void>;
  abstract validatePassword(id: string, password: string): Promise<boolean>;
}
