const express = require("express")
const path = require("path")
const router = express.Router()

const app = express()
app.use(express.urlencoded({extended:false}));
app.use(express.json())


app.all("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
})


router.get("/api/cartinfo",(req,res)=>{
    let cartInfo = require("./cartInfo")
    res.json(cartInfo)
})


app.use("/",router)

app.listen(3002,()=>{
    console.log("jd api server is ready on port 3002")
})
