## 請說明 SQL Injection 的攻擊原理以及防範方法
在提交內容的時候夾帶 SQL 語法，以入侵、竄改或破壞資料庫，防範方法如下：
1. 用正則表達式過濾字串
2. 用 PHP 內建的 Prepared Statement 方式 
3. 使用 addslashes() 

## 請說明 XSS 的攻擊原理以及防範方法
利用留言、搜尋等提交資訊的欄位漏洞傳入 javascript 程式碼，再讓使用者執行這段程式碼，主要分為 Stored XSS (儲存型) 和 Reflected XSS (反射型) 和 DOM-Based XSS，防範方法如下：
1. 將 client 端提交的內容全部僅以純文字呈現，PHP 的話可以使用內建的 htmlspecialchars()
2. 針對使用者會更動到 DOM 的部分，用 innerText 取代 innerHTML

## 請說明 CSRF 的攻擊原理以及防範方法
誘騙已登入的使用者點擊惡意連結，冒用使用者身份向伺服器發送請求，偷偷執行非使用者意願的動作。防範方式在於判斷「是不是真的是由使用者發出的需求」藉由以下方法防範：
1. 伺服器端
    1. 檢查 Referer 來源的 domain 是不是合法的來源
    2. 圖形、簡訊驗證
    3. 發送請求時驗證 CSRF token 
    4. Double Submit Cookie 判斷請求來源跟使用者發出的 domain 是否相同
2. 瀏覽器
    1.  chrome 可以使用內建的 samesite 機制
