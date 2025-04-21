import { TaskStatusEnum } from '@/commons/enum/task-status.enum';
import {
  CreateTask,
  FilterTask,
  TaskEntity,
  UpdateTask,
  ViewTask,
} from '@/domain/entities/task.entity';
import { TaskRepository } from '@/domain/repositories/task.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaskRepositoryImpl implements TaskRepository {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly repository: Repository<TaskEntity>,
  ) {}

  async create(data: CreateTask): Promise<ViewTask> {
    return await this.repository.save(data);
  }

  async listByFilter(data: FilterTask): Promise<ViewTask[]> {
    return await this.repository.find({
      where: data,
      order: { createdAt: 'DESC' },
    });
  }

  async listById(id: string): Promise<ViewTask | null> {
    return await this.repository.findOne({
      where: { id },
    });
  }

  async update(id: string, data: UpdateTask): Promise<void> {
    const result = await this.repository.update(id, data);
    if (result.affected === 0) {
      throw new NotFoundException();
    }
  }

  async delete(id: string): Promise<void> {
    const result = await this.repository.update(id, {
      deletedAt: new Date().toISOString(),
      status: TaskStatusEnum.DELETED,
    });
    if (result.affected === 0) {
      throw new NotFoundException();
    }
  }
}
