import React from "react"

const MyContext = React.createContext("my")

//provider consummer
/**
 * 1, React.createContext("上下的文的名称")
 * 2. 把这个上文(share state) 绑定一个父组件 , provider={共识的数据源}
 * 3. 子组件中如果需要使用这个share state , consummer=(state)=>{}
 */

class Two extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <MyContext.Consumer>
                {
                    value=> (<div>
                        <h1>two component : {value.title} </h1>
                    </div>)
                }
            </MyContext.Consumer>
        );
    }

}




class One extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MyContext.Provider value={{title:"共享的标题"}}>
                <div>
                    <h1>One component</h1>
                    <Two/>
                </div>
            </MyContext.Provider>
        );
    }

}


export default One
