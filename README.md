# ThectBlog

[![](https://img.shields.io/github/license/cheetosysst/thectBlog?style=flat-square)]()
[![](https://img.shields.io/david/dev/cheetosysst/thectBlog?style=flat-square)]()
[![](https://img.shields.io/scrutinizer/quality/g/cheetosysst/thectBlog?style=flat-square)]()
[![](https://img.shields.io/codacy/grade/bbe55dd4142444ceb37e054215cecf09?style=flat-square)]()
[![](https://img.shields.io/github/issues/cheetosysst/thectBlog?style=flat-square)]()
[![](https://img.shields.io/github/issues-pr/cheetosysst/thectBlog?style=flat-square)]()
[![](https://img.shields.io/github/repo-size/cheetosysst/thectBlog?style=flat-square)]()
[![](https://img.shields.io/github/v/release/cheetosysst/thectBlog?style=flat-square)]()
[![](https://img.shields.io/github/downloads/cheetosysst/thectBlog/total?style=flat-square)]()

使用 Node.js 撰寫的部落格後台，可透過在模板中插入不同模塊，或直接修改模塊內容來修改。

## 使用說明 Usage

### 安裝 Installation
1. 設定 `.env`，請參考下方 [dotenv 設定](#dotenv)
2. 輸入下方指令
	``` bash
	git clone --depth=1 https://github.com/cheetosysst/thectblog.git
	npm i
	npm start
	```
這個部落格使用 nodemon，在檔案變動時自動重新啟動。當然你不想用 nodemon 的話可以到 `./package.json` 中修改成單純使用 node。

### 標記語言 Markdown
MD 頁面的 demo 可以到 `localhost:8081/post/1` 查看。

**注意!** 目前 Markdown 的 render 是在 server 端完成，但是未來可能會考慮改交由 client 端處裡渲染。或許這樣可以讓 server 端減少一點工作量，但我聽說這樣會造成客戶端載入時間明顯延長，所以還在評估中。


## 架構 Architecture
像前面提到的，這個部落格程式採用 MVC 架構，但是現階段非常的粗糙。目前為了測試內容包含非常多我個人的資料，但未來會把相關資料去除，方便用戶自己到 `./views/json/` 找到相對應檔案修改資料。

### 控制器 Collection
Controller 負責 router。所有要求會在 `./controller/controller.js` 分配，再到各個 `./controller/*.controller.js` 做處理。
#### ./controller/controller.js
按照以下格式呼叫，非必要請勿在此加 router 以外的程式，避免影響可讀性。
```javascript
router.use('/example', (req, res) => { exampleController.controller(req, res)})
```
#### ./controller/example.controller.js
每個 controller 裡面都會有一個 controller(req, res) 被 export 出。
### 視圖 View
View 負責 render 頁面，當 controller 接收到請求，並向 View 要求 render 頁面時，View 會向 model 取得必要資訊 (部落格名稱、擁有者、... 等等) 以及各個模塊。第一次 render 時，View 會讀取該頁面模板，在當中插入模塊。第二次 render 時插入必要資訊，並回傳到 controller。

### 模型

#### 資料庫 Database
目前規劃，在 Model 中會加入一個 `database.model.js` 負責作為和所有資料庫溝通，不管使用者選擇使用的資料庫為何，都會盡可能的使用相同的幾個 function。

而實際的連接、搜尋、關閉資料庫，都會放在 `./library` 中，為各種資料庫寫的 library 檔案中。

### 靜態檔案 Static File
`./public/` 當中的檔案可以透過 `example.com/static/*` 存取，建議將 css、js、 和開放下載資源的放在這裡。

### 相依 Dependecies
- [EJS](https://ejs.co/): 用來做網頁的 Render
- [dotenv](https://github.com/motdotla/dotenv): 用來設定變數
- [markdown-it](https://github.com/markdown-it/markdown-it): 用來處理 Markdown
- [Bootstrap](https://getbootstrap.com/): 網頁前端框架。
	- 注意，我目前採用的是直接寫到 HTML(ejs)中，未來或許會使用 npm 版本，或是直接包在這個 Repo 當中。如果你希望可以改用本地的 Bootstrap 檔案，請將下載好的 Bootstrap 檔案放到 public 並修改 HTML(ejs) 中的路徑
- [ExpressJS](https://expressjs.com/zh-tw/): 後臺架構
- [nodemon](https://nodemon.io/): 在伺服器出現錯誤關閉，或是 code 更新時自動重啟
- [MongoDB](https://www.mongodb.com/): 資料庫

### dotenv
在 `.env_example` 中有 dotenv 設定的範例，另存新檔時存為 `.env` 即可以