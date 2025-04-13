import { ViewTask } from '@/domain/entities/task.entity';
import { TaskRepository } from '@/domain/repositories/task.repository';
import { ListOneTaskUseCase } from '@/domain/use-cases/task/list-one.task.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListOneTaskUseCaseImpl implements ListOneTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(id: string): Promise<ViewTask | null> {
    return await this.taskRepository.listById(id);
  }
}
