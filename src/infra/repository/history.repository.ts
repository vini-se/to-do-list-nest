import {
  CreateHistory,
  HistoryEntity,
  ViewHistory,
} from '@/domain/entities/history.entity';
import { HistoryRepository } from '@/domain/repositories/history.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HistoryRepositoryImpl implements HistoryRepository {
  constructor(
    @InjectRepository(HistoryEntity)
    private readonly repository: Repository<HistoryEntity>,
  ) {}

  async create(data: CreateHistory): Promise<void> {
    await this.repository.save(data);
  }

  async listByTaskId(taskId: string): Promise<ViewHistory[]> {
    return await this.repository.find({
      where: { taskId },
      order: { createdAt: 'DESC' },
    });
  }

  async listByUserId(userId: string): Promise<ViewHistory[]> {
    return await this.repository.find({
      where: { task: { userId } },
      order: { createdAt: 'DESC' },
    });
  }
}
