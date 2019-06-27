
let initNumState = {  //创建一个共享的状态
    num:0
}

let numReducer = (state=initNumState,action={})=>{
    let {num} = state; //拿出来了初始化的state num=0
    console.log(action)
    switch (action.type) {
        case "ADD": //修改num的规则
            console.log(action.data)
            return {num:++num} //返回了一个新状态
            break;
        case "MINUS": //修改num的规则
            return {num:--num} //返回了一个新状态
            break;
        default: //当没有这个类型type 返回默认
            return state;
            break
    }
}


export default numReducer
