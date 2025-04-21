import { CreateComment } from '@/domain/entities/comments.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCommentDto implements Partial<CreateComment> {
  @ApiProperty({
    description: 'The ID of the task to which the comment belongs',
    example: '123e4567-e89b-12d3-a456-426614174000',
    type: 'string',
    required: true,
  })
  @IsUUID()
  @IsNotEmpty()
  taskId: string;

  @ApiProperty({
    description: 'The comment text',
    example: 'Post Comment',
    type: 'string',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  comment: string;
}
