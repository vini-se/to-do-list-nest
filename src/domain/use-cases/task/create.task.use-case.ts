import { CreateTask, ViewTask } from '@/domain/entities/task.entity';

export abstract class CreateTaskUseCase {
  abstract execute(data: CreateTask): Promise<ViewTask>;
}
