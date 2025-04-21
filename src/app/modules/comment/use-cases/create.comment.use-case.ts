import { CreateComment, ViewComment } from '@/domain/entities/comments.entity';
import { CommentRepository } from '@/domain/repositories/comment.repository';
import { CreateCommentUseCase } from '@/domain/use-cases/comment/create.comment.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateCommentUseCaseImpl implements CreateCommentUseCase {
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(data: CreateComment): Promise<ViewComment> {
    return await this.commentRepository.create(data);
  }
}
