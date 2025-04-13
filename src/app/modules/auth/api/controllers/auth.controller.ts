import { RegisterAuthUseCase } from '@/domain/use-cases/auth/register.auth.use-case';
import { SignInAuthUseCase } from '@/domain/use-cases/auth/sign-in.auth.use-case';
import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAuthDto } from '../dtos/register.auth.dto';
import { SignInAuthDto } from '../dtos/sign-in.auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly signInAuthUseCase: SignInAuthUseCase,
    private readonly registerAuthUseCase: RegisterAuthUseCase,
  ) {}

  @Post('sign-in')
  async signIn(@Body() body: SignInAuthDto) {
    return await this.signInAuthUseCase.execute(body);
  }

  @Post('register')
  async register(@Body() body: RegisterAuthDto) {
    return await this.registerAuthUseCase.execute(body);
  }

  @Post('forgot-password')
  forgotPassword() {
    const password = ': string';
    const username = ': string';
    const challengeQuestion = ': string';
    const challengeAnswer = ': string';

    return { password, username, challengeQuestion, challengeAnswer };
  }
}
