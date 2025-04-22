import { AuthGuard, IJwtRequest } from '@/app/modules/auth/guard/auth.guard';
import { UserRoleEnum } from '@/commons/enum/user-role.enum';
import { CreateTaskUseCase } from '@/domain/use-cases/task/create.task.use-case';
import { DeleteTaskUseCase } from '@/domain/use-cases/task/delete.task.use-case';
import { ListByFilterTaskUseCase } from '@/domain/use-cases/task/list-by-filter.task.use-case';
import { ListHistoryTaskUseCase } from '@/domain/use-cases/task/list-history.task.use-case';
import { ListOneTaskUseCase } from '@/domain/use-cases/task/list-one.task.use-case';
import { UpdateTaskUseCase } from '@/domain/use-cases/task/update.task.use-case';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateTaskDto } from '../dtos/create.task.dto';
import { FilterTaskDto } from '../dtos/filter.task.dto';
import { UpdateTaskDto } from '../dtos/update.task.dto';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('task')
export class TaskController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly listOneTaskUseCase: ListOneTaskUseCase,
    private readonly updateTaskUseCase: UpdateTaskUseCase,
    private readonly deleteTaskUseCase: DeleteTaskUseCase,
    private readonly listByFilterUseCase: ListByFilterTaskUseCase,
    private readonly listHistoryTaskUseCase: ListHistoryTaskUseCase,
  ) {}

  @Get('history/:id')
  async findHistory(@Param('id', ParseUUIDPipe) id: string) {
    return this.listHistoryTaskUseCase.execute(id);
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.listOneTaskUseCase.execute(id);
  }

  @Get()
  async findByFilter(@Query() data: FilterTaskDto, @Req() req: IJwtRequest) {
    const userIdFromOperation = this.getUserIdFromRequest(req);

    return this.listByFilterUseCase.execute({
      ...data,
      userId: userIdFromOperation,
    });
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.deleteTaskUseCase.execute(id);
  }

  @Post()
  async create(@Body() data: CreateTaskDto, @Req() req: IJwtRequest) {
    const userIdFromOperation = this.getUserIdFromRequest(req);

    return this.createTaskUseCase.execute({
      ...data,
      userId: userIdFromOperation,
    });
  }

  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() data: UpdateTaskDto,
    @Req() req: IJwtRequest,
  ) {
    const userIdFromOperation = this.getUserIdFromRequest(req);

    return this.updateTaskUseCase.execute(id, {
      ...data,
      userId: userIdFromOperation,
    });
  }

  private getUserIdFromRequest(req: IJwtRequest): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const userIdFromBody: string = req.body?.userId;

    const userIdInOperation =
      req.user.role === UserRoleEnum.ADMIN && userIdFromBody
        ? userIdFromBody
        : req.user.sub;

    return userIdInOperation;
  }
}
