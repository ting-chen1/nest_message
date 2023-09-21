import { IsString } from 'class-validator';
// 要使用 validation pipe 需要先裝
// 1. class-transformer，將一般的 object 轉型成特定類別的實體，這樣才可以使用相關實體方法
// 2. class-validator，驗證相關的修飾器封在此

export class CreateMessageDto {
  @IsString()
  content: string;
  // 經 post request body 產生的 DTO 實體，content 如果不是字串，或者沒有 content 都會觸發驗證錯誤
  // {
  //   "message": [
  //       "content must be a string"
  //   ],
  //   "error": "Bad Request",
  //   "statusCode": 400
  // }
}
