import { ViewComment } from '@/domain/entities/comments.entity';
import { CommentRepository } from '@/domain/repositories/comment.repository';
import { ListByUserIdCommentUseCase } from '@/domain/use-cases/comment/list-by-user-id.comment.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListByUserIdCommentUseCaseImpl
  implements ListByUserIdCommentUseCase
{
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(userId: string): Promise<ViewComment[]> {
    return await this.commentRepository.listByFilter({ userId });
  }
}
