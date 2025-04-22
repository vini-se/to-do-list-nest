import { CreateHistory, ViewHistory } from '../entities/history.entity';

export abstract class HistoryRepository {
  abstract create(data: CreateHistory): Promise<void>;
  abstract listByTaskId(taskId: string): Promise<ViewHistory[]>;
  abstract listByUserId(userId: string): Promise<ViewHistory[]>;
}
