# ThectBlog

*** Warining! ***: 我正在重寫，很多檔案會消失。我現在要把檔案重新切個得清楚一點，未來要大改很多流程。  

不知道是我第幾次試著要寫個人網站了(笑)，但這次是認真來的。

基本上是 MVC 架構，但我沒寫過我不確定我有沒有搞錯什麼概念，至少現在是執行的了，我就先放著不管了。

## Usage

``` bash
npm i
npm start
```
這個部落格採用 nodemon，在檔案變動時自動重新啟動。當然你不想用 nodemon 的話可以到 `./package.json` 中修改成單純使用 node。

### Markdown
MD 頁面的 demo 可以到 `localhost:8081/post/1` 查看


## 架構
像前面提到的，這個部落格程式採用 MVC 架構，但是現階段非常的粗糙。目前為了測試內容包含非常多我個人的資料，但未來會把相關資料去除，方便用戶自己到 `./views/json/` 找到相對應檔案修改資料。

### 相依
- [EJS](https://ejs.co/): 用來做網頁的 Render
- [Bootstrap](https://getbootstrap.com/): 網頁框架。
    - 注意，我目前採用的是直接寫到 HTML(ejs)中，未來或許會使用 npm 版本，或是直接包在這個 Repo 當中。如果你希望可以改用本地的 Bootstrap 檔案，請將下載好的 Bootstrap 檔案放到 public 並修改 HTML(ejs) 中的路徑。
- [ExpressJS](https://expressjs.com/zh-tw/): 後臺架構

### Static 檔案
`./public/` 當中的檔案可以透過 `example.com/static/*` 存取，建議將 css、js、 和開放下載資源的放在這裡。
