import { FilterTask, ViewTask } from '@/domain/entities/task.entity';

export abstract class ListByFilterTaskUseCase {
  abstract execute(data: FilterTask): Promise<ViewTask[]>;
}
