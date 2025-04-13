import { CreateUser, ViewUser } from '@/domain/entities/user.entity';

export abstract class RegisterAuthUseCase {
  abstract execute(data: CreateUser): Promise<ViewUser>;
}
