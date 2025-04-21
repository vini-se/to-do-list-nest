import { ViewComment } from '@/domain/entities/comments.entity';

export abstract class ListByIdCommentUseCase {
  abstract execute(id: string, userId: string): Promise<ViewComment>;
}
