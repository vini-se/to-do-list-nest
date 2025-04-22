import { TaskEntity } from '@/domain/entities/task.entity';
import { UserEntity } from '@/domain/entities/user.entity';
import { TaskRepository } from '@/domain/repositories/task.repository';
import { CreateTaskUseCase } from '@/domain/use-cases/task/create.task.use-case';
import { DeleteTaskUseCase } from '@/domain/use-cases/task/delete.task.use-case';
import { ListByFilterTaskUseCase } from '@/domain/use-cases/task/list-by-filter.task.use-case';
import { ListHistoryTaskUseCase } from '@/domain/use-cases/task/list-history.task.use-case';
import { ListOneTaskUseCase } from '@/domain/use-cases/task/list-one.task.use-case';
import { UpdateTaskUseCase } from '@/domain/use-cases/task/update.task.use-case';
import { TaskRepositoryImpl } from '@/infra/repository/task.repository.impl';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryModule } from '../history/history.module';
import { TaskController } from './api/controllers/task.controller';
import { CreateTaskUseCaseImpl } from './use-cases/create.task.use-case';
import { DeleteTaskUseCaseImpl } from './use-cases/delete.task.use-case';
import { ListByFilterTaskUseCaseImpl } from './use-cases/list-by-filter.task.use-case';
import { ListHistoryTaskUseCaseImpl } from './use-cases/list-history.task.use-case';
import { ListOneTaskUseCaseImpl } from './use-cases/list-one.task.use-case';
import { UpdateTaskUseCaseImpl } from './use-cases/update.task.use-case';

@Module({
  imports: [HistoryModule, TypeOrmModule.forFeature([UserEntity, TaskEntity])],
  controllers: [TaskController],
  providers: [
    UpdateTaskUseCaseImpl,
    {
      provide: UpdateTaskUseCase,
      useExisting: UpdateTaskUseCaseImpl,
    },
    ListOneTaskUseCaseImpl,
    {
      provide: ListOneTaskUseCase,
      useExisting: ListOneTaskUseCaseImpl,
    },
    ListByFilterTaskUseCaseImpl,
    {
      provide: ListByFilterTaskUseCase,
      useExisting: ListByFilterTaskUseCaseImpl,
    },
    DeleteTaskUseCaseImpl,
    {
      provide: DeleteTaskUseCase,
      useExisting: DeleteTaskUseCaseImpl,
    },
    CreateTaskUseCaseImpl,
    {
      provide: CreateTaskUseCase,
      useExisting: CreateTaskUseCaseImpl,
    },
    TaskRepositoryImpl,
    {
      provide: TaskRepository,
      useExisting: TaskRepositoryImpl,
    },
    ListHistoryTaskUseCaseImpl,
    {
      provide: ListHistoryTaskUseCase,
      useExisting: ListHistoryTaskUseCaseImpl,
    },
  ],
})
export class TaskModule {}
