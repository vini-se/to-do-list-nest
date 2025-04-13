import { ViewUser } from '../entities/user.entity';

export abstract class UserRepository {
  abstract findByUsername(username: string): Promise<ViewUser>;
  abstract deleteUser(id: string): Promise<void>;
}
