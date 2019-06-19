
import React, {Component, Fragment} from "react"
import CartHeader from "../components/carts/cart-header"
import CartFooter from "../components/carts/cart-footer"
import CartShopList from "../components/carts/cart-shop-list"
import "../assets/carts.css"
import cartApi from "../apis/cartApi"

export default class Carts extends Component{

    constructor(props) {
        super(props);

        this.countTotalMoney = this.countTotalMoney.bind(this)
        this.shopCheckAll = this.shopCheckAll.bind(this)
        this.productSingleCheck = this.productSingleCheck.bind(this)

        this.state = {
            cartInfo:{}
        }


        cartApi.getCartInfo(data=>{
            console.log(data)
            this.setState({
                cartInfo:data
            })
            this.countTotalMoney()
        })
    }

    countTotalMoney(){
        let total = 0
        if(this.state.cartInfo.shops){
            this.state.cartInfo.shops.forEach((shop,sid)=>{
                shop.products.forEach((product,pid)=>{
                    if(product.checked){
                        total += product.price*product.num
                    }
                })
            })
        }

        let newCart = this.state.cartInfo
        newCart.totalPrice = total

        this.setState({
            cartInfo:newCart
        })


    }

    shopCheckAll(sid){
        console.log(sid)
        let newCartInfo = this.state.cartInfo
        newCartInfo.shops[sid].checked = !newCartInfo.shops[sid].checked
        let isChecked = newCartInfo.shops[sid].checked
        console.log(isChecked)
        newCartInfo.shops[sid].products.forEach((product,key)=>{
            product.checked = isChecked
            console.log(product.checked)
        })

        this.setState({
            cartInfo:newCartInfo
        })

        this.countTotalMoney()
    }

    productSingleCheck(sid,pid){
        let newsCartInfo = this.state.cartInfo;
        newsCartInfo.shops[sid].products[pid].checked = !newsCartInfo.shops[sid].products[pid].checked
        let isCheck =newsCartInfo.shops[sid].products[pid].checked

        let checkp= newsCartInfo.shops[sid].products.every((product,pid)=>{
             return product.checked == true
        })

        console.log(checkp)

        newsCartInfo.shops[sid].checked=checkp
        newsCartInfo.checked = checkp

        this.setState({
            cartInfo:newsCartInfo
        })

        this.countTotalMoney()
    }


    render() {
        return  <Fragment>
            <CartHeader/>
            <CartShopList pCheck={this.productSingleCheck} sCheck={this.shopCheckAll} data={this.state.cartInfo}/>
            <CartFooter data={this.state.cartInfo}/>
        </Fragment>;
    }
}
