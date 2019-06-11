const path = require("path")
const express = require("express") //koa

const app = express()
//静态的服务器
app.use(express.static(__dirname))


app.listen(3000,()=>{
    console.log("react server is ready on port 3000")
})
