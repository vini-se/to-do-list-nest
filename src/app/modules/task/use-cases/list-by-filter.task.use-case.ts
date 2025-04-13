import { FilterTask, ViewTask } from '@/domain/entities/task.entity';
import { TaskRepository } from '@/domain/repositories/task.repository';
import { ListByFilterTaskUseCase } from '@/domain/use-cases/task/list-by-filter.task.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListByFilterTaskUseCaseImpl implements ListByFilterTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(data: FilterTask): Promise<ViewTask[]> {
    return await this.taskRepository.listByFilter(data);
  }
}
