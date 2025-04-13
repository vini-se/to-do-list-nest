import { JwtUtils } from '@/commons/utils/jwt.utils';
import { UserAuthRepository } from '@/domain/repositories/user-auth.repository';
import { UserRepository } from '@/domain/repositories/user.repository';
import {
  ISignInAuthData,
  ISignInAuthResponse,
  SignInAuthUseCase,
} from '@/domain/use-cases/auth/sign-in.auth.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SignInAuthUseCaseImpl implements SignInAuthUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userAuthRepository: UserAuthRepository,
    private readonly jwtUtils: JwtUtils,
  ) {}

  async execute({
    username,
    password,
  }: ISignInAuthData): Promise<ISignInAuthResponse> {
    const user = await this.userRepository.findByUsername(username);
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await this.userAuthRepository.validatePassword(
      user.id,
      password,
    );

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const { accessToken } = await this.jwtUtils.hashToken(user);
    return { user, accessToken };
  }
}
