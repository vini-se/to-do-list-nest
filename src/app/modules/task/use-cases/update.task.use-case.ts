import { UpdateTask } from '@/domain/entities/task.entity';
import { TaskRepository } from '@/domain/repositories/task.repository';
import { UpdateTaskUseCase } from '@/domain/use-cases/task/update.task.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateTaskUseCaseImpl implements UpdateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(id: string, data: UpdateTask): Promise<void> {
    await this.taskRepository.update(id, data);
  }
}
