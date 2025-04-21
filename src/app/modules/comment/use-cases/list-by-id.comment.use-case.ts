import { ViewComment } from '@/domain/entities/comments.entity';
import { CommentRepository } from '@/domain/repositories/comment.repository';
import { ListByIdCommentUseCase } from '@/domain/use-cases/comment/list-by-id.comment.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListByIdCommentUseCaseImpl implements ListByIdCommentUseCase {
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(id: string, userId: string): Promise<ViewComment> {
    const [comment] = await this.commentRepository.listByFilter({ id, userId });
    return comment;
  }
}
