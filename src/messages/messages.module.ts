import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepositroy } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepositroy]
  // providers 可理解成，可以作為其他類別相依的物件
  // 這裡的 MessagesService 與 MessagesRepositroy 都會用於 denpendency injection container 裡
  // 每當需要使用 controller 時，Nest 會將讓 DI container 產 controller 實體
  // DI container 會檢查注入的相依類別，產生相依的實體，將相依資訊個別掛上
  // container 會紀錄整個流程產生的各種實體，需要時使用，不產新的
  // 所以如果要求產   constructor(public messagesService: MessagesService, messagesService2: MessagesService) {}
  // 也只會產 1 個 MessagesService 的實體，但會給 messagesService 與 messagesService2 使用
})
export class MessagesModule {}
