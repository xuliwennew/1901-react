import React, {Component} from "react"
import CartShop from "./cart-shop"
import Loading from "../Loading";




export default class CartShopList extends Component{


    render() {

        if(this.props.data.shops){
            return ( <div className="shopping">
                {
                    this.props.data.shops.map((shop,key)=>{
                        return <CartShop pCheck={this.props.pCheck} sCheck={this.props.sCheck} data={shop} sid={key} key={key}/>
                    })
                }
            </div>)
        }
        return <Loading/>

    }
}


