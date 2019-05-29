## 什麼是 Ajax？
與伺服器進行非同步資料傳遞的技術。

## 用 Ajax 與我們用表單送出資料的差別在哪？
表單送出資料時，每次送出都要換頁，用 Ajax 則可以透過 javascript 發出 request 而不必換頁。

## JSONP 是什麼？
透過不受同源政策影響的標籤，例如：img, script 來取得資料。現在比較少用。

## 要如何存取跨網域的 API？
由於 Same origin policy，沒有在相同網域下，瀏覽器自動擋掉 response。那要如何可以拿到被擋掉的 response 呢？透過 CORS 跨來源請求資源共用，在回傳 response 的 header 中加入 Access-Control-Allow-Origin 來設置允許回傳的網域，或者直接加上 * 就可以跨網域存取資料了。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
同源政策只有在瀏覽器環境才成立，第四週是用 node.js 發出請求，所以不在瀏覽器的限制之下。
