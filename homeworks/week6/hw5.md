## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
- <hr /> 水平線，切分出不同內容主題區塊，不可包含內容。 
- <strong> 為文字加上粗體
- <input> 使用者可以輸入資料的地方，做表單的時候常用，依照屬性有不同的樣式：按鈕的 button 、勾選的 Checkbox 、輸入日期的 date 等，用法超多，蠻折磨人的。

## 請問什麼是盒模型（box modal）
html 中可以看到的元素都像是個有多層的箱子，由內而外分別是
- 元素本身的內容寬高，來自文字、圖片或者設定的寬高
- padding 元素內容和元素編筐的距離，把空隙加在盒子內，所以盒子整體會變大。
- border 元素的邊線，標示這個元素盒子有多大的範圍。
- margin 元素盒子和外頭東西的距離。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
- inline 像是文字流動一個接著一個排列的樣子，不能設定寬高，需要視內容決定大小呈現。
- block div的預設排列方式，佔據一整橫排的空間，不需要由內容決定大小，可以直接設定大小、間距等性質。
- inline-block 融合上述兩個特性，可以像 inline 對外像 inline 的文字排列，對內具有 block 可以直接設定寬高等樣式的功能，但兩個 inline-block 並列時會有空隙。例如：就算沒有設定 margin 也不會完全貼合，中間會有 4px 的間距，來自於 html 的空格，font-size:0 或刪除元素間的space處理。
>更新：inline-block 舉例


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

- static  
網頁元素們的預設值，不特別安排，順著預設的配置出現在畫面上。

接下來的元素都被定位，可以使用 top, left, bottom, right 屬性來控制位置。

- relative  
再沒有下其他屬性的情況下，表現基本和 static 相同，不過若在此時下了額外的 top, left, bottom, right 數值的話，則會產生與原本位置相對地移動，不過畫面中所佔的位置仍然是原本的位置，單就這點呈現會有點像 transform: translate() ，不過功能不一樣。

- absolute  
下了這個屬性之後，會自動往父層找***沒有* 設定 position: static ;** 的元素，並相對於此元素的排列，若往上都沒有找到，則會以 body 位置做相對定位。 absolute 不占版面流動的空間，預設會出現在 top: 0 ; left: 0; 的位置。
>更新：不是找父層有設定 relative 的元素，而是不是預設值的元素。

- fixed  
相對於瀏覽器視窗位置，不隨捲動或移動而移動，成為忠實存在在畫面上的一個元素。與 absolute 一樣不占版面流動空間。