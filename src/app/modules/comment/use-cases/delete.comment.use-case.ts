import { CommentRepository } from '@/domain/repositories/comment.repository';
import { DeleteCommentUseCase } from '@/domain/use-cases/comment/delete.comment.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteCommentUseCaseImpl implements DeleteCommentUseCase {
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(id: string, userId: string): Promise<void> {
    const [comment] = await this.commentRepository.listByFilter({
      id,
      userId,
    });

    if (!comment) {
      throw new Error('Comment not found');
    }

    await this.commentRepository.delete(id);
  }
}
