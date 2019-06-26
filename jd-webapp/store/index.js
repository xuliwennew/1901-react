import {createStore} from "redux"


/**
 * 使用redux的4四步 redux-saga
 1, 安装 npm install redux react-redux -S
 2. 1，定义需要管理共享状态state 2.定义store管理的规则 reducer
 3, 根据状态state和规则reducer来创建一个store : createStore -> store  用来管理共享的状态
 **/

let initState = {  //创建一个共享的状态
    num:0
}

//step2 定义修改num的规则 state 指向 initState action是由组件发送来的动作请求
//dispatch({type:"ADD"})
let reducer = (state,action={})=>{
    let {num} = state; //拿出来了初始化的state num=0
    console.log(action)
  switch (action.type) {
      case "ADD": //修改num的规则
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


//step3 根据initalState 和 reducer 来创建一个store
let store = createStore(reducer,initState)

export default store
