import { TaskStatusEnum } from '@/commons/enum/task-status.enum';
import { CreateTask } from '@/domain/entities/task.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto implements CreateTask {
  @ApiProperty({
    description: 'Task description',
    example: 'This is a task description',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Task name',
    example: 'Task name',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'User id',
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  userId: string;

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
