import React, {Component, Fragment} from "react"
import CartHeader from "../components/carts/cart-header"
import CartFooter from "../components/carts/cart-footer"
import CartShopList from "../components/carts/cart-shop-list"
import "../assets/carts.css"
import cartApi from "../apis/cartApi"
import {connect} from "react-redux"

class Carts extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.INIT()
    }

    render() {
        let {
            INIT,
            cartInfo,
            addNum,
            minusNum,
            productSingleCheck,
            shopCheckAll,
            shopCartCheckAll
        } = this.props;

        return <Fragment>
            <CartHeader/>
            <CartShopList
                add={addNum}
                minus={minusNum}
                pCheck={productSingleCheck}
                sCheck={shopCheckAll}
                data={cartInfo}/>
            <CartFooter cCheck={shopCartCheckAll} data={cartInfo}/>
        </Fragment>;
    }
}

let mapStateToProps = (state)=>{
    return {
       cartInfo: state.cartReducer.cartInfo
    }
}


let mapDispatchToProps = (dispatch)=>{
    return {
        INIT:()=> dispatch({type:"INIT"}) ,
        addNum : ()=>dispatch({type:"addNum"}),
        minusNum : ()=>dispatch({type:"minusNum"}),
        productSingleCheck : ()=>dispatch({type:"productSingleCheck"}),
        shopCheckAll : ()=>dispatch({type:"shopCheckAll"}),
        shopCartCheckAll : ()=>dispatch({type:"shopCartCheckAll"})
    }
}

let CartsContainer = connect(mapStateToProps,mapDispatchToProps)(Carts)


export default  CartsContainer
