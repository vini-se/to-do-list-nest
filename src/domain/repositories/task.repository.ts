import {
  CreateTask,
  FilterTask,
  UpdateTask,
  ViewTask,
} from '../entities/task.entity';

export abstract class TasksRepository {
  abstract create(data: CreateTask): Promise<ViewTask>;
  abstract listByFilter(data: FilterTask): Promise<ViewTask[]>;
  abstract listById(id: string): Promise<ViewTask | null>;
  abstract update(id: string, data: UpdateTask): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
