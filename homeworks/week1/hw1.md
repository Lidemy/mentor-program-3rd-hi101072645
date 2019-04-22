## 交作業流程

1. 新開一個 branch： `git branch hw1`
2. 切換到 branch：`git checkout hw1`
3. 認真的寫作業
4. 把更動加入版本控制，說明此次更動並提交出去： `git commit -am "說明這次做了什麼事"`
5. 啊，esLint 檢查沒過，回到上一步
6. 上傳更動到 GitHub：`git push origin hw1`
7. 在交作業專用 repository 依格式開 issue：[Week1] 並在內容貼上 pull request 網址和心得
8. 老師看過之後：
    1. OK：會 merge，把 branch 刪掉並關閉 issue
    2. 要修改：會先 merge，另開新 branch 修改
9. 切換到 master：`git checkout master`
10. 把合併後的 master 抓下來：`git pull origin master`
11. 刪除交作業用的 branch：`git branch -d hw1`
12. 完成！