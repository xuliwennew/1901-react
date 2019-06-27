import React,{Component} from "react"
import Loading from "../components/Loading";
import {connect} from "react-redux"
import numReducer from "../store/modules/numReducer";


class Counter extends Component {

    render() {
        let {num,update} = this.props
       return <div style={{fontSize:"30px"}}>

           <h1>{num}</h1>
           <button onClick={update} style={{fontSize:"30px"}}>+</button>
       </div>
    }
}

//react-redux

// export default class CounterContainer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { //private 不可以共享
//             num:store.getState().num
//         }
//
//         //hooks  UI = f(state) 组件化的公式
//         this.update = this.update.bind(this)
//     }
//
//     //redux-thunk 是把数据的获取操作放到 middlare 外面
//     fetchData(dispatch, getState, extraArgument){
//         console.log(getState)
//         setTimeout(()=>{
//             dispatch({type:"ADD"})
//         },5000)
//     }
//
//     //UI =F(state) hook web component
//
//     update(){
//         // let {num} = this.state
//         // this.setState({
//         //     num:++num
//         // })
//
//         //更新store
//         store.dispatch(this.fetchData)
//     }
//
//     componentDidMount(){
//         //subscribe store 变化
//         store.subscribe(()=>{
//             console.log("store 变化了，修改吗，亲！")
//             this.setState({
//                 num:store.getState().num
//             })
//         })
//     }
//
//
//     render() {
//         return  <Counter num={this.state.num} update={this.update}/>
//     }
// }

//把store中的状态map 到counter中的props的num
let mapStateToProps = (state)=>{
    return {
        num : state.numReducer.num //store.state - > counter.props.num
    }
}

//把 ()=> dispatch({type:"ADD"}) map到 counter pros update
let mapDispatchToProps = (dispatch)=>{
    return {
        update :()=> dispatch({type:"ADD"})
    }
}

//connect 用来连接store , 连接组件-》 Container

let CounterContainer = connect(mapStateToProps,mapDispatchToProps)(Counter);


export default CounterContainer
