import React,{Component} from "react"
import cartApi from "../apis/cartApi"
import Loading from "../components/Loading"
import {Link} from "react-router-dom"

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartInfo: {}
        }
    }

    async componentWillMount(){
       let data = await cartApi.getProducts()

        this.setState({
            cartInfo:data
        })
    }

    render() {
        if(this.state.cartInfo.shops){
            return <div>
                <h1>产品列表</h1>
                <ul>
                    {
                        this.state.cartInfo.shops[0].products.map((item,key)=>{
                            return <li key={key} style={{fontSize:"25px",borderBottom:"1px solid red"}}>
                                <Link to={`/detail/${key}`}>{item.title}</Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        }
        return <Loading/>
    }
}
