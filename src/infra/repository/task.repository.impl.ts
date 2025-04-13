import {
  CreateTask,
  FilterTask,
  TaskEntity,
  UpdateTask,
  ViewTask,
} from '@/domain/entities/task.entity';
import { TasksRepository } from '@/domain/repositories/task.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksRepositoryImpl implements TasksRepository {
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
      throw new Error('Task not found or could not be updated');
    }
  }

  async delete(id: string): Promise<void> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) {
      throw new Error('Task not found or could not be deleted');
    }
  }
}
