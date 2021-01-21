# LostNFound
# [109-1] Web Programming Final
# (Group 14) LostNFound 遺失物通報系統
![](https://i.imgur.com/J8Cin4p.png)
## Demo連結
## 主要功能
1. 撿到/丟失物品的同學或民眾，可以利用此網站登記。
2. 顯示目前平台上已被通報的物品，並透過輸入關鍵字，協助使用者快速查詢。
![](https://i.imgur.com/2fEHR23.png)

## 使用方式
1. 撿到物品：「首頁」→→→「我撿到東西」→→→「申報拾獲物」表單。在登記時，會根據你輸入的關鍵字，進行相似結果的匹配！
![](https://i.imgur.com/LkJc8fs.png)
![](https://i.imgur.com/zxiOWdF.png)
2. 丟失物品登記協尋：「首頁」→→→「我要找東西」→→→「登記遺失物」表單登記。
3. 查詢現在登記的拾獲物品/遺失物品：「首頁」→→→「我要找東西」→→→搜尋欄。

## 使用與參考之框架/模組/原始碼
### 前端
1. React
2. GraphQL
3. Material UI
4. React-Apollo
5. Axios
6. Redux
7. React-router
8. Google-Map-React
9. 其它工具類部屬套件：date-io, date-fns等
10. Eslint 協助開發
### 後端
1. Graphql-yoga
2. Mongoose
3. Eslint 協助開發
### 資料庫
使用MongoDB串聯後端及資料庫
### 參考資源
1. Material UI 官方文件 https://material-ui.com/
2. Google-Map-React 官方文件 https://github.com/google-map-react/google-map-react

## 心得
這項Project對我們最大的挑戰是Material UI的使用，雖然其無疑是非常強大的套件，但有關排版、設計、各式組件的規劃，都相當的複雜與容易出錯，花了很多的時間在尋找如何調整。雖然一開始也有很多功能的設想，但由於時間限制最後放棄不少東西。另外，後端選擇使用GraphQL，也有遇到關於圖片存放的問題。希望透過這次經驗之後，能夠更加上手！

## 組員分工
* 江浩瑋
    * 後端全體與前端溝通功能 (包含資料庫, GraphQL & Apollo)
    * 前端設計 (Sidebar, 搜尋)
    * Deploy
* 葉星宏
    * 前端設計 (Redux, Router, 表單 Component)
* 莊承霖
    * 前端設計 (Post Component, 子頁面設計與頁面美化)

### 其他說明
由於大家對信用卡方面還是有擔憂，所以沒有購買Google API key，只能在浮水印下進行基礎的拖動操作，有點可惜。