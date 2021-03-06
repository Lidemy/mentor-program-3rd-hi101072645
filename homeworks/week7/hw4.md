## 什麼是 DOM？
Document Object Model，由瀏覽器提供讓程式語言能控制 html 的方式，在瀏覽器拿到 html 檔案時，將 html 文件架構為樹狀，再將每個 tag 看成節點對應，使 javascript 可以控制網頁中的元素。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
觸發事件時，順序傳遞會先捕獲再冒泡。
從 window 開始往下一層一層傳遞到觸發事件的元件，這個從上層往下捕捉的過程就是捕獲階段。
從觸發的元件往上層傳遞，像泡泡一樣越觸及越廣的傳遞方式，就是冒泡階段。

## 什麼是 event delegation，為什麼我們需要它？
當需要為許多相似性質的元素加上相同功能的 addEventListener 時，為了避免多次重複動作，或者想為還未建立的節點加上事件監聽的話，就會用到 event delegation 了。
在這些節點的父層加上事件監聽，當觸發事件又同時符合相似性質的條件時，就能在多個、甚至還未建立的節點上建立監聽事件。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
event.preventDefault() 是用來阻止瀏覽器預設行為，而 event.stopPropagation() 則是停止事件傳遞。
例如在表單 submit 按鈕加上 event.preventDefault() 時，點擊則不會進行預設 POST 傳出表單的動作，但是會觸發事件傳遞時的動作，像是點擊 window 時跳出 alert 訊息。
如果加上 event.stopPropagation() 的話，就能停止點擊 submit 按鈕時，經由事件傳遞觸發到 window 的 alert 訊息。