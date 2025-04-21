import { ViewComment } from '@/domain/entities/comments.entity';
import { CommentRepository } from '@/domain/repositories/comment.repository';
import { ListByTaskIdCommentUseCase } from '@/domain/use-cases/comment/list-by-task-id.comment.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListByTaskIdCommentUseCaseImpl
  implements ListByTaskIdCommentUseCase
{
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(taskId: string, userId: string): Promise<ViewComment[]> {
    return await this.commentRepository.listByFilter({ taskId, userId });
  }
}
