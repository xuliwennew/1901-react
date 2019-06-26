const path = require("path")
const express = require("express") //koa
var history = require('connect-history-api-fallback');
const app = express()

app.use(history());
//静态的服务器
app.use(express.static(path.join(__dirname,"./jd-webapp")))


app.listen(3000,()=>{
    console.log("react server is ready on port 3000")
})
