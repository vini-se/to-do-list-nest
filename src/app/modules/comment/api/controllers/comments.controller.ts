import { AuthGuard, IJwtRequest } from '@/app/modules/auth/guard/auth.guard';
import { CreateCommentUseCase } from '@/domain/use-cases/comment/create.comment.use-case';
import { DeleteCommentUseCase } from '@/domain/use-cases/comment/delete.comment.use-case';
import { ListByIdCommentUseCase } from '@/domain/use-cases/comment/list-by-id.comment.use-case';
import { ListByTaskIdCommentUseCase } from '@/domain/use-cases/comment/list-by-task-id.comment.use-case';
import { ListByUserIdCommentUseCase } from '@/domain/use-cases/comment/list-by-user-id.comment.use-case';
import { UpdateCommentUseCase } from '@/domain/use-cases/comment/update.comment.use-case';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateCommentDto } from '../dtos/create.comment.dto';
import { UpdateCommentDto } from '../dtos/update.comment.dto';

@Controller('comments')
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class CommentsController {
  constructor(
    private readonly createCommentUseCase: CreateCommentUseCase,
    private readonly deleteCommentUseCase: DeleteCommentUseCase,
    private readonly listByIdCommentUseCase: ListByIdCommentUseCase,
    private readonly listByTaskIdCommentUseCase: ListByTaskIdCommentUseCase,
    private readonly listByUserIdCommentUseCase: ListByUserIdCommentUseCase,
    private readonly updateCommentUseCase: UpdateCommentUseCase,
  ) {}

  @Post()
  async create(@Body() body: CreateCommentDto, @Req() req: IJwtRequest) {
    return await this.createCommentUseCase.execute({
      ...body,
      userId: req.user.sub,
    });
  }

  @Get('by-task/:taskId')
  async listByTask(
    @Param('taskId', ParseUUIDPipe) taskId: string,
    @Req() req: IJwtRequest,
  ) {
    return await this.listByTaskIdCommentUseCase.execute(taskId, req.user.sub);
  }

  @Get('by-user')
  async listByUser(@Req() req: IJwtRequest) {
    return await this.listByUserIdCommentUseCase.execute(req.user.sub);
  }

  @Get(':id')
  async listById(
    @Param('id', ParseUUIDPipe) id: string,
    @Req() req: IJwtRequest,
  ) {
    return await this.listByIdCommentUseCase.execute(id, req.user.sub);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Req() req: IJwtRequest,
    @Body() body: UpdateCommentDto,
  ) {
    return await this.updateCommentUseCase.execute(id, req.user.sub, body);
  }

  @Delete(':id/delete')
  async delete(
    @Param('id', ParseUUIDPipe) id: string,
    @Req() req: IJwtRequest,
  ) {
    return await this.deleteCommentUseCase.execute(id, req.user.sub);
  }
}
