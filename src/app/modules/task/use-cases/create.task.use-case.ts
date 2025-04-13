import { CreateTask, ViewTask } from '@/domain/entities/task.entity';
import { TaskRepository } from '@/domain/repositories/task.repository';
import { CreateTaskUseCase } from '@/domain/use-cases/task/create.task.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateTaskUseCaseImpl implements CreateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(data: CreateTask): Promise<ViewTask> {
    return await this.taskRepository.create(data);
  }
}
