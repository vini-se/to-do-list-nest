import { TaskStatusEnum } from '@/commons/enum/task-status.enum';
import { CreateTask } from '@/domain/entities/task.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto implements Omit<CreateTask, 'userId'> {
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
    description: 'Task status',
    example: TaskStatusEnum.PENDING,
    required: false,
    enum: TaskStatusEnum,
  })
  @IsEnum(TaskStatusEnum)
  @IsOptional()
  status?: TaskStatusEnum;
}
