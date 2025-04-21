import { ViewComment } from '@/domain/entities/comments.entity';

export abstract class ListByTaskIdCommentUseCase {
  abstract execute(taskId: string, userId: string): Promise<ViewComment[]>;
}
