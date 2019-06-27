//step2 定义修改num的规则 state 指向 initState action是由组件发送来的动作请求
//dispatch({type:"ADD"})

import cartApi from "../../apis/cartApi"

//自定义一个中间件
let logMiddleWare = store => next=> action =>{
    console.log("log 中件件:")
    console.log(action)
    next(action)
}

let fetchMiddleWare = store => next=> async action =>{
    console.log("fetchMiddleWare 中件件:")

    switch (action.type) {
        case "INIT":
            let data = await cartApi.getCartInfo()
            let newAction = Object.assign(action,{data:data})
            next(newAction)
            break;
        default:
            next(action)
            break
    }

}

export default fetchMiddleWare

