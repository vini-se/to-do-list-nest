import { ViewHistory } from '@/domain/entities/history.entity';
import { HistoryRepository } from '@/domain/repositories/history.repository';
import { ListHistoryUserUseCase } from '@/domain/use-cases/user/list-history.user.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListHistoryUserUseCaseImpl implements ListHistoryUserUseCase {
  constructor(private readonly historyRepository: HistoryRepository) {}

  async execute(userId: string): Promise<ViewHistory[]> {
    return this.historyRepository.listByUserId(userId);
  }
}
