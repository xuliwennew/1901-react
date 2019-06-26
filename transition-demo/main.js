import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"

import "./m.css"


import {CSSTransition} from 'react-transition-group';

function App(props) {
    // 用useState替换this.setState
    const [num, updateNum] = useState(0);
    const [isShow, setShow] = useState(false)

    let handlerUpdate = () => {
        updateNum(1 + num)
        setShow(!isShow)
    }

    // useEffect替换Component生命周期函数
    /**
     * useEffect传入的函数，则会在：

     component 挂载后触发一次
     渲染完成后才触发
     第二个参数里传入的需要检测比较的数据有变化时才触发
     如果没有第二个参数，则每次渲染都会触发
     那就很明显useEffect不能简单地替代componentDidUpdate。
     */
    useEffect( () => {
        console.log("use effect")
        document.title = `You clicked ${num} times`;
        let getData = async ()=>{
            let res = await fetch("http://localhost:3002/api/cartinfo")
            let data = await res.json()
            console.log(data)
        }
        getData()
    },[])

    return (
        <div>
            <CSSTransition in={isShow} timeout={200} classNames="my-node">
                <h1>
                    {num}
                </h1>
            </CSSTransition>
            <button type="button" onClick={handlerUpdate}>
                +
            </button>
        </div>
    );
}

ReactDOM.render(<App n={0}/>, document.querySelector("#app"))
