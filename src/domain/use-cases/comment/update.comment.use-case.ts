import { UpdateComment } from '@/domain/entities/comments.entity';

export abstract class UpdateCommentUseCase {
  abstract execute(
    id: string,
    userId: string,
    data: UpdateComment,
  ): Promise<void>;
}
