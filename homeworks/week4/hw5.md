## 請以自己的話解釋 API 是什麼
提供和索取資料的兩方傳遞資料的介面，提供方可以不用公開太多資料庫資料，透過 API 有限度地提供內容，索取資料方再透過提供方設定的 API 文件，依照規範發送請求來取用資料。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
- 401 Unauthorized 未認證
header 沒有提供身份憑證，可能需要登入或取得認證 token。
- 403 Forbidden 請求被禁止
收到請求但是因為沒有權限而拒絕執行，就算有提供身份憑證也不執行。
- 418 I'm a teapot 我是個茶壺
Google 或其他某些網站中以彩蛋的方式存在的狀態碼，1988 年的愚人節笑話，茶壺收到要求煮咖啡的指令會回傳此錯誤。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: ..

|   說明    | Method |   path   |   參數  |   範例   |
| -------- | ------ | -------- |---------|---------|
| 回傳所有餐廳資料 | GET | /restaurants | \_limit:限制回傳資料數量 | /restaurants?\_limit=5 |
| 回傳單一餐廳資料 | GET | /restaurants/:id | 無 | /restaurants/10  |
| 刪除餐廳    | DELETE  | /restaurants/:id | 無 | 無|
| 新增餐廳    | POST    | /restaurants | name: 餐廳名稱 | 無 |
| 更改餐廳    | PATCH   | /restaurants/:id | name: 餐廳名稱 | 無 |

