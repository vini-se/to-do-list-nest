import { ViewHistory } from '@/domain/entities/history.entity';

export abstract class ListHistoryTaskUseCase {
  abstract execute(taskId: string): Promise<ViewHistory[]>;
}
