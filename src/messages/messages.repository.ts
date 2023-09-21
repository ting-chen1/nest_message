import { Injectable } from '@nestjs/common';
// 用於注入到 controller 的類別都需要引用 Injectable 併用修飾器標明
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepositroy {
  async all() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async find(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    const id = (Object.keys(messages).length + 1)

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
// 定義各種資料存取方式
// 可以是檔案，第三方，資料庫....
// 由於存取需要間所以都要使用 async await 處理
