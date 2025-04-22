import { ViewHistory } from '@/domain/entities/history.entity';

export abstract class ListHistoryUserUseCase {
  abstract execute(userId: string): Promise<ViewHistory[]>;
}
