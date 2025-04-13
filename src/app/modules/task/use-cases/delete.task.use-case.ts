import { TaskRepository } from '@/domain/repositories/task.repository';
import { DeleteTaskUseCase } from '@/domain/use-cases/task/delete.task.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteTaskUseCaseImpl implements DeleteTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
