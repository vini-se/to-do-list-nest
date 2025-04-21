import { CreateComment, ViewComment } from '@/domain/entities/comments.entity';

export abstract class CreateCommentUseCase {
  abstract execute(data: CreateComment): Promise<ViewComment>;
}
