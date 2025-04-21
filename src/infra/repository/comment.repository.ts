import {
  CommentEntity,
  CreateComment,
  FilterComment,
  UpdateComment,
  ViewComment,
} from '@/domain/entities/comments.entity';
import { CommentRepository } from '@/domain/repositories/comment.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CommentRepositoryImpl implements CommentRepository {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly repository: Repository<CommentEntity>,
  ) {}

  async create(data: CreateComment): Promise<CommentEntity> {
    return await this.repository.save(data);
  }

  async listByFilter(data: FilterComment): Promise<ViewComment[]> {
    return await this.repository.find({
      where: data,
      order: { createdAt: 'DESC' },
    });
  }

  async update(id: string, data: UpdateComment): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }
}
