import React, {Component} from "react"
import CartShopProduct from "./cart-shop-product"
import Loading from "../Loading";
import CartShop from "./cart-shop";





export default class CartShopProductList extends Component{


    render() {
        let { data , sid} = this.props
        if(data){
            return <ul>
                {
                    data.map((product,key)=>{
                        return <CartShopProduct pCheck={this.props.pCheck}  key={key} data={product} pid={key} sid={sid}/>
                    })
                }
            </ul>;
        }
        return <Loading/>
    }
}


