import React, {Component} from "react"
import CartShopProductList from "./cart-shop-product-list"





export default class CartShop extends Component{

    constructor(props) {
        super(props);
        this.shopCheckAll = this.shopCheckAll.bind(this)
    }

    shopCheckAll(){

        let {data,sid,sCheck} = this.props;
        sCheck(sid)
    }

    render() {
        let {data,sid} = this.props;

        return <div className="shop-group-item">
            <div className="shop-name">
                <input type="checkbox"
                       onClick={this.shopCheckAll}
                       className={data.checked?"checked":"unchecked"} defaultChecked={data.checked}  defaultValue={data.checked} />
                <h4>
                    <a href="#">{data.shopName}</a>
                </h4>
                <div className="coupons">
                    <span>领券</span>
                    <em>|</em>
                    <span>编辑</span>
                </div>
            </div>
            <CartShopProductList pCheck={this.props.pCheck}  data={data.products} sid={sid}/>
            <div className="shopPrice">
                本店总计：
                ￥<span className="shop-total-amount ShopTotal">16000</span>
            </div>
        </div>;
    }
}


