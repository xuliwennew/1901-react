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

        this.countTotalMoney = this.countTotalMoney.bind(this)
        this.shopCheckAll = this.shopCheckAll.bind(this)
        this.productSingleCheck = this.productSingleCheck.bind(this)
        this.shopCartCheckAll = this.shopCartCheckAll.bind(this)
        this.addNum = this.addNum.bind(this)
        this.minusNum = this.minusNum.bind(this)

        // this.state = {
        //     cartInfo: {}
        // }


        /**
         * 数据获取，并计算总价格
         */


    }

    async componentWillMount() {
        let data = await cartApi.getCartInfo()
        this.setState({
            cartInfo: data
        })
        this.countTotalMoney()
    }


    /**
     * 计算当前的购物车中所有商品的总价
     */
    countTotalMoney() {
        let total = 0
        if (this.state.cartInfo.shops) {
            this.state.cartInfo.shops.forEach((shop, sid) => {
                shop.products.forEach((product, pid) => {
                    if (product.checked) {
                        total += product.price * product.num
                    }
                })
            })
        }

        let newCart = this.state.cartInfo
        newCart.totalPrice = total

        this.setState({
            cartInfo: newCart
        })
    }

    /**
     * 计算每个店铺的总价
     * @param shop
     * @returns {number}
     */
    countShopMoney(shop) {
        let total = 0;
        shop.products.forEach((product, i) => {
            if (product.checked) {
                total += product.price * product.num
            }
        })

        return total;
    }


    /**
     * 整个店铺的全选与返选
     * @param sid
     */
    shopCheckAll(sid) {
        console.log(sid)
        let newCartInfo = this.state.cartInfo
        newCartInfo.shops[sid].checked = !newCartInfo.shops[sid].checked
        let isChecked = newCartInfo.shops[sid].checked
        console.log(isChecked)
        newCartInfo.shops[sid].products.forEach((product, key) => {
            product.checked = isChecked
            console.log(product.checked)
        })

        this.setState({
            cartInfo: newCartInfo
        })

        this.countTotalMoney()
    }


    /**
     * 商品单选逻辑，当选择的购物车中有一个商品没有选中，
     * 这个购物车的状态就是false,
     * @param sid
     * @param pid
     */
    productSingleCheck(sid, pid) {
        let newsCartInfo = this.state.cartInfo;
        newsCartInfo.shops[sid].products[pid].checked = !newsCartInfo.shops[sid].products[pid].checked
        let isCheck = newsCartInfo.shops[sid].products[pid].checked

        let checkp = newsCartInfo.shops[sid].products.every((product, pid) => {
            return product.checked == true
        })

        console.log(checkp)

        newsCartInfo.shops[sid].checked = checkp
        newsCartInfo.checked = checkp

        //重新设置状态
        this.setState({
            cartInfo: newsCartInfo
        })

        this.countTotalMoney()
    }

    /**
     * 针对购物全选和返选
     */
    shopCartCheckAll() {
        let {cartInfo} = this.state;
        cartInfo.checked = !cartInfo.checked

        let isChecked = cartInfo.checked;
        cartInfo.shops.forEach((shop, sid) => {
            shop.checked = isChecked
            shop.products.forEach((product, pid) => {
                product.checked = isChecked
            })
        })

        this.setState({
            cartInfo: cartInfo
        })

        //重新统计价格
        this.countTotalMoney()

    }

    /**
     * 增加商品的件数
     * @param sid
     * @param pid
     */
    addNum(sid, pid) {
        let {cartInfo} = this.state;
        cartInfo.shops[sid].products[pid].num = ++cartInfo.shops[sid].products[pid].num
        //vue react
        this.setState({
            cartInfo: cartInfo
        })
        this.countTotalMoney()
    }

    /**
     * 减少商品的数量
     * @param sid
     * @param pid
     */
    minusNum(sid, pid) {
        let {cartInfo} = this.state;
        if (cartInfo.shops[sid].products[pid].num <= 1) {
            cartInfo.shops[sid].products[pid].num = 1
        } else {
            cartInfo.shops[sid].products[pid].num = --cartInfo.shops[sid].products[pid].num
            //vue react
            this.setState({
                cartInfo: cartInfo
            })
            this.countTotalMoney()
        }

    }


    /**
     * 组件的视图
     * @returns {*}
     */
    render() {
        return <Fragment>
            <CartHeader/>
            <CartShopList
                add={this.addNum}
                minus={this.minusNum}
                pCheck={this.productSingleCheck}
                sCheck={this.shopCheckAll}
                data={this.state.cartInfo}/>
            <CartFooter cCheck={this.shopCartCheckAll} data={this.state.cartInfo}/>
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

    }
}

let CartsContainer = connect(mapStateToProps,mapDispatchToProps)(Carts)
