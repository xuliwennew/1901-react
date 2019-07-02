import {createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import fetchMiddleWare from "./middlewares/logMiddle"
import numReducer from "./modules/numReducer"
import cartReducer from "./modules/cartReducer"

/**
 * 使用redux的4四步 redux-saga
 1, 安装 npm install redux react-redux -S
 2. 1，定义需要管理共享状态state 2.定义store管理的规则 reducer
 3, 根据状态state和规则reducer来创建一个store : createStore -> store  用来管理共享的状态
 **/
const rootReducer = combineReducers({
    numReducer,
    cartReducer
})

//step3 根据initalState 和 reducer 来创建一个store
let store = createStore(rootReducer,applyMiddleware(fetchMiddleWare))

export default store
