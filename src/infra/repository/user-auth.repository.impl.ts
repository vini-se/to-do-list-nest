import {
  CreateUser,
  UserEntity,
  UserRecoverPassword,
  ViewUser,
} from '@/domain/entities/user.entity';
import { UserAuthRepository } from '@/domain/repositories/user-auth.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UserAuthRepositoryImpl implements UserAuthRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async register({
    password,
    challengeAnswer,
    ...user
  }: CreateUser): Promise<ViewUser> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword: string = await bcrypt.hash(password, salt);
    const hashedChallengeAnswer: string = await bcrypt.hash(
      challengeAnswer,
      salt,
    );
    const newUser = this.repository.create({
      ...user,
      password: hashedPassword,
      challengeAnswer: hashedChallengeAnswer,
    });
    return await this.repository.save(newUser);
  }

  async recoverPassword({
    password,
    ...userData
  }: UserRecoverPassword): Promise<void> {
    const user = await this.repository.findOne({
      where: userData,
    });
    if (!user) {
      throw new Error('User not found');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await this.repository.save(user);
  }

  async validatePassword(id: string, password: string): Promise<boolean> {
    const user = await this.repository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    return await bcrypt.compare(password, user.password);
  }
}
