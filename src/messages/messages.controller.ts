import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-messages.dto';
import { MessagesService } from './messages.service'

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  index() {
    return this.messagesService.all();
  }

  @Get('/:id')
  async show(@Param('id') id: string) {
    const message = await this.messagesService.find(id);

    if(!message) {
      throw new NotFoundException('message not found');
      // 除了 404 還有其他錯誤可使用 ex 403.....
    }

    return message;
  }

  @Post()
  create(@Body() body: CreateMessageDto) {
    // body 會以 DTO 型態經過 validation pipe 驗證
    return this.messagesService.create(body.content);
  }
}
// controller 只處理 http request 與 response
// 邏輯由 service 負責
// 資料存取由 repository 管理