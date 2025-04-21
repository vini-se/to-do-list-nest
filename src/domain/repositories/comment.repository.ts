import {
  CommentEntity,
  CreateComment,
  FilterComment,
  UpdateComment,
  ViewComment,
} from '../entities/comments.entity';

export abstract class CommentRepository {
  abstract create(data: CreateComment): Promise<CommentEntity>;
  abstract listByFilter(data: FilterComment): Promise<ViewComment[]>;
  abstract update(id: string, data: UpdateComment): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
