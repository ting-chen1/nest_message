import { Injectable } from '@nestjs/common';
// 用於注入到 controller 的類別都需要引用 Injectable 併用修飾器標明

import { MessagesRepositroy } from './messages.repository';

@Injectable()
// 標記這個 class 要用於 DI container
export class MessagesService {
  constructor(public messagesRepo: MessagesRepositroy) {}
  // 這樣做是為了依賴注入

  all() {
    return this.messagesRepo.all();
  }

  find(id: string) {
    return this.messagesRepo.find(id);
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}

// 定義各種邏輯供 controller 使用
// 裡面可使用多個 repository
