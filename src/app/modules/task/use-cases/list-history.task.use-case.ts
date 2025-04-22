import { ViewHistory } from '@/domain/entities/history.entity';
import { HistoryRepository } from '@/domain/repositories/history.repository';
import { ListHistoryTaskUseCase } from '@/domain/use-cases/task/list-history.task.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListHistoryTaskUseCaseImpl implements ListHistoryTaskUseCase {
  constructor(private readonly historyRepository: HistoryRepository) {}

  async execute(taskId: string): Promise<ViewHistory[]> {
    return this.historyRepository.listByTaskId(taskId);
  }
}
