import { ViewComment } from '@/domain/entities/comments.entity';

export abstract class ListByUserIdCommentUseCase {
  abstract execute(userId: string): Promise<ViewComment[]>;
}
