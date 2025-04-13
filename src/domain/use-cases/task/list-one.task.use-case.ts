import { ViewTask } from '@/domain/entities/task.entity';

export abstract class ListOneTaskUseCase {
  abstract execute(id: string): Promise<ViewTask | null>;
}
