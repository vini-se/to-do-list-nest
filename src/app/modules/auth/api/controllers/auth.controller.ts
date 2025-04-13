import { ForgotPasswordUseCase } from '@/domain/use-cases/auth/forgot-password.auth.use-case';
import { RegisterAuthUseCase } from '@/domain/use-cases/auth/register.auth.use-case';
import { SignInAuthUseCase } from '@/domain/use-cases/auth/sign-in.auth.use-case';
import { Body, Controller, Post } from '@nestjs/common';
import { ForgotPasswordAuthDto } from '../dtos/forgot-password.auth.dto';
import { RegisterAuthDto } from '../dtos/register.auth.dto';
import { SignInAuthDto } from '../dtos/sign-in.auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly signInAuthUseCase: SignInAuthUseCase,
    private readonly registerAuthUseCase: RegisterAuthUseCase,
    private readonly forgotPasswordUseCase: ForgotPasswordUseCase,
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
  async forgotPassword(@Body() body: ForgotPasswordAuthDto) {
    return await this.forgotPasswordUseCase.execute(body);
  }
}
