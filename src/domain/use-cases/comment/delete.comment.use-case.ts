export abstract class DeleteCommentUseCase {
  abstract execute(id: string, userId: string): Promise<void>;
}
