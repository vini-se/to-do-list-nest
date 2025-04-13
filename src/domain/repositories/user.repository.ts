import { FilterUser, ViewUser } from '../entities/user.entity';

export abstract class UserRepository {
  abstract findByFilter(data: FilterUser): Promise<ViewUser[]>;
  abstract findByUsername(username: string): Promise<ViewUser>;
  abstract deleteUser(id: string): Promise<void>;
}
