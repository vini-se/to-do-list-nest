import { UpdateComment } from '@/domain/entities/comments.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCommentDto implements UpdateComment {
  @ApiProperty({
    description: 'Comment new text',
    example: 'This is a new comment',
    required: true,
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  comment: string;
}
