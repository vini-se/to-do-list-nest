import { UpdateTask } from '@/domain/entities/task.entity';

export abstract class UpdateTaskUseCase {
  abstract execute(id: string, data: UpdateTask): Promise<void>;
}
