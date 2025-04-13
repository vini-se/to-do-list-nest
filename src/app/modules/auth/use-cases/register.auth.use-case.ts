import { CreateUser, ViewUser } from '@/domain/entities/user.entity';
import { UserAuthRepository } from '@/domain/repositories/user-auth.repository';
import { RegisterAuthUseCase } from '@/domain/use-cases/auth/register.auth.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterAuthUseCaseImpl implements RegisterAuthUseCase {
  constructor(private readonly userRepository: UserAuthRepository) {}

  async execute(data: CreateUser): Promise<ViewUser> {
    return await this.userRepository.register(data);
  }
}
