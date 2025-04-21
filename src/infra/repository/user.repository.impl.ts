import {
  FilterUser,
  UserEntity,
  ViewUser,
} from '@/domain/entities/user.entity';
import { UserRepository } from '@/domain/repositories/user.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async findByFilter(data: FilterUser): Promise<ViewUser[]> {
    const users = await this.repository.find({
      where: data,
      order: { createdAt: 'DESC' },
    });
    return users;
  }

  async findByUsername(username: string): Promise<ViewUser> {
    const user = await this.repository.findOne({ where: { username } });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async deleteUser(id: string): Promise<void> {
    const result = await this.repository.softDelete(id);
    if (result.affected === 0) {
      throw new NotFoundException();
    }
  }
}
