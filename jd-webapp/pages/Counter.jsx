import React,{Component} from "react"
import Loading from "../components/Loading";
import store from "../store"


export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { //private 不可以共享
            num:store.getState().num
        }

        //hooks  UI = f(state) 组件化的公式
        this.update = this.update.bind(this)
    }

    update(){
        // let {num} = this.state
        // this.setState({
        //     num:++num
        // })

        //更新store
        store.dispatch({type:"ADD"})
    }

    componentDidMount(){
        //subscribe store 变化
        store.subscribe(()=>{
            console.log("store 变化了，修改吗，亲！")
            this.setState({
                num:store.getState().num
            })
        })
    }


    render() {
       return <div style={{fontSize:"30px"}}>

           <h1>{this.state.num}</h1>
           <button onClick={this.update} style={{fontSize:"30px"}}>+</button>
       </div>
    }
}
