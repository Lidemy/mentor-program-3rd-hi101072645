``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第 1 行，傳入一個陣列
2. 執行第 2 行，第一個迴圈，設定變數 i 是 0，檢查 i 是否小於陣列項目數，是，繼續執行迴圈
3. 執行第 3 行，判斷陣列索引數等於 i 的值是否小於零，是，即回傳字串 invalid，結束迴圈；否，回到第 2 行，繼續執行迴圈
4. 執行第 5 行，第二個迴圈，設定變數 i 是 2，檢查 i 是否小於陣列項目，是，繼續執行迴圈
5. 執行第 6 行，判斷陣列索引數等於 i 的值，是否不等於陣列前兩項相加的數值，是，即回傳字串 invalid，結束迴圈；否，回到第 5 行，繼續執行迴圈
7. 執行第 8 行，回傳字串 valid
8. 執行完畢