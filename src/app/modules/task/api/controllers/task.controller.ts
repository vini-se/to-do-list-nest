import { CreateTaskUseCase } from '@/domain/use-cases/task/create.task.use-case';
import { DeleteTaskUseCase } from '@/domain/use-cases/task/delete.task.use-case';
import { ListByFilterTaskUseCase } from '@/domain/use-cases/task/list-by-filter.task.use-case';
import { ListOneTaskUseCase } from '@/domain/use-cases/task/list-one.task.use-case';
import { UpdateTaskUseCase } from '@/domain/use-cases/task/update.task.use-case';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from '../dtos/create.task.dto';
import { FilterTaskDto } from '../dtos/filter.task.dto';
import { UpdateTaskDto } from '../dtos/update.task.dto';

@Controller('task')
export class TaskController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly listOneTaskUseCase: ListOneTaskUseCase,
    private readonly updateTaskUseCase: UpdateTaskUseCase,
    private readonly deleteTaskUseCase: DeleteTaskUseCase,
    private readonly listByFilterUseCase: ListByFilterTaskUseCase,
  ) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.listOneTaskUseCase.execute(id);
  }

  @Get()
  async findByFilter(@Query() data: FilterTaskDto) {
    return this.listByFilterUseCase.execute(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteTaskUseCase.execute(id);
  }

  @Post()
  async create(@Body() data: CreateTaskDto) {
    return this.createTaskUseCase.execute(data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateTaskDto) {
    return this.updateTaskUseCase.execute(id, data);
  }
}
