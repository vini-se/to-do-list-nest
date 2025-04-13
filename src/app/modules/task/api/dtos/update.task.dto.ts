import { TaskStatusEnum } from '@/commons/enum/task-status.enum';
import { UpdateTask } from '@/domain/entities/task.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto implements UpdateTask {
  @ApiProperty({
    description: 'Task description',
    example: 'This is a task description',
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Task name',
    example: 'Task name',
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'User id',
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  userId?: string;

  @ApiProperty({
    description: 'Task status',
    example: TaskStatusEnum.PENDING,
    required: false,
    enum: TaskStatusEnum,
  })
  @IsEnum(TaskStatusEnum)
  @IsOptional()
  status?: TaskStatusEnum;
}
