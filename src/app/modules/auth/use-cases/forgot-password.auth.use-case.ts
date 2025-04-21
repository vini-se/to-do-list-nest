import { UserRecoverPassword } from '@/domain/entities/user.entity';
import { UserAuthRepository } from '@/domain/repositories/user-auth.repository';
import { UserRepository } from '@/domain/repositories/user.repository';
import { ForgotPasswordUseCase } from '@/domain/use-cases/auth/forgot-password.auth.use-case';
import {
  ISignInAuthResponse,
  SignInAuthUseCase,
} from '@/domain/use-cases/auth/sign-in.auth.use-case';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ForgotPasswordUseCaseImpl implements ForgotPasswordUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userAuthRepository: UserAuthRepository,
    private readonly signInAuthUseCase: SignInAuthUseCase,
  ) {}

  async execute(data: UserRecoverPassword): Promise<ISignInAuthResponse> {
    const [user] = await this.userRepository.findByFilter({
      username: data.username,
      challengeQuestion: data.challengeQuestion,
    });

    if (!user) {
      throw new NotFoundException();
    }

    await this.userAuthRepository.recoverPassword(data);
    return await this.signInAuthUseCase.execute({
      password: data.password,
      username: data.username,
    });
  }
}
