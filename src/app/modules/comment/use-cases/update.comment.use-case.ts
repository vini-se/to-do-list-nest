import { UpdateComment } from '@/domain/entities/comments.entity';
import { CommentRepository } from '@/domain/repositories/comment.repository';
import { UpdateCommentUseCase } from '@/domain/use-cases/comment/update.comment.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateCommentUseCaseImpl implements UpdateCommentUseCase {
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(
    id: string,
    userId: string,
    data: UpdateComment,
  ): Promise<void> {
    const [comment] = await this.commentRepository.listByFilter({
      id,
      userId,
    });

    if (!comment) {
      throw new Error('Comment not found');
    }

    await this.commentRepository.update(id, data);
  }
}
