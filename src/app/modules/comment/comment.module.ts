import { CommentEntity } from '@/domain/entities/comments.entity';
import { CommentRepository } from '@/domain/repositories/comment.repository';
import { DeleteCommentUseCase } from '@/domain/use-cases/comment/delete.comment.use-case';
import { ListByIdCommentUseCase } from '@/domain/use-cases/comment/list-by-id.comment.use-case';
import { ListByTaskIdCommentUseCase } from '@/domain/use-cases/comment/list-by-task-id.comment.use-case';
import { ListByUserIdCommentUseCase } from '@/domain/use-cases/comment/list-by-user-id.comment.use-case';
import { UpdateCommentUseCase } from '@/domain/use-cases/comment/update.comment.use-case';
import { CommentRepositoryImpl } from '@/infra/repository/comment.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsController } from './api/controllers/comments.controller';
import { CreateCommentUseCaseImpl } from './use-cases/create.comment.use-case';
import { DeleteCommentUseCaseImpl } from './use-cases/delete.comment.use-case';
import { ListByIdCommentUseCaseImpl } from './use-cases/list-by-id.comment.use-case';
import { ListByTaskIdCommentUseCaseImpl } from './use-cases/list-by-task-id.comment.use-case';
import { ListByUserIdCommentUseCaseImpl } from './use-cases/list-by-user-id.comment.use-case';
import { UpdateCommentUseCaseImpl } from './use-cases/update.comment.use-case';
import { CreateCommentUseCase } from '@/domain/use-cases/comment/create.comment.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity])],
  controllers: [CommentsController],
  providers: [
    CreateCommentUseCaseImpl,
    DeleteCommentUseCaseImpl,
    ListByIdCommentUseCaseImpl,
    ListByTaskIdCommentUseCaseImpl,
    ListByUserIdCommentUseCaseImpl,
    UpdateCommentUseCaseImpl,
    CommentRepositoryImpl,
    {
      provide: CreateCommentUseCase,
      useExisting: CreateCommentUseCaseImpl,
    },
    {
      provide: DeleteCommentUseCase,
      useExisting: DeleteCommentUseCaseImpl,
    },
    {
      provide: ListByIdCommentUseCase,
      useExisting: ListByIdCommentUseCaseImpl,
    },
    {
      provide: ListByTaskIdCommentUseCase,
      useExisting: ListByTaskIdCommentUseCaseImpl,
    },
    {
      provide: ListByUserIdCommentUseCase,
      useExisting: ListByUserIdCommentUseCaseImpl,
    },
    {
      provide: UpdateCommentUseCase,
      useExisting: UpdateCommentUseCaseImpl,
    },
    {
      provide: CommentRepository,
      useExisting: CommentRepositoryImpl,
    },
  ],
})
export class CommentModule {}
