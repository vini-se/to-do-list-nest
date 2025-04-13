import { JwtUtils } from '@/commons/utils/jwt.utils';
import { UserEntity } from '@/domain/entities/user.entity';
import { UserAuthRepository } from '@/domain/repositories/user-auth.repository';
import { UserRepository } from '@/domain/repositories/user.repository';
import { RegisterAuthUseCase } from '@/domain/use-cases/auth/register.auth.use-case';
import { SignInAuthUseCase } from '@/domain/use-cases/auth/sign-in.auth.use-case';
import { UserAuthRepositoryImpl } from '@/infra/repository/user-auth.repository.impl';
import { UserRepositoryImpl } from '@/infra/repository/user.repository.impl';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './api/controllers/auth.controller';
import { RegisterAuthUseCaseImpl } from './use-cases/register.auth.use-case';
import { SignInAuthUseCaseImpl } from './use-cases/sign-in.auth.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    JwtUtils,
    SignInAuthUseCaseImpl,
    {
      provide: SignInAuthUseCase,
      useExisting: SignInAuthUseCaseImpl,
    },
    RegisterAuthUseCaseImpl,
    {
      provide: RegisterAuthUseCase,
      useExisting: RegisterAuthUseCaseImpl,
    },
    UserAuthRepositoryImpl,
    {
      provide: UserAuthRepository,
      useExisting: UserAuthRepositoryImpl,
    },
    UserRepositoryImpl,
    {
      provide: UserRepository,
      useExisting: UserRepositoryImpl,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
