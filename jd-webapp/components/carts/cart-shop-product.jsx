import React, {Component} from "react"





export default class CartShopProduct extends Component{

    constructor(props) {
        super(props);
        this.productCheck = this.productCheck.bind(this)
        this.minusNum = this.minusNum.bind(this)
        this.addNum = this.addNum.bind(this)
    }

    productCheck(){
        let { pid, sid ,data,pCheck} = this.props;
        pCheck(sid,pid)
    }

    minusNum(){
        let {pid, sid ,minus} = this.props;
        minus(sid,pid)
    }

    addNum(){
        let {pid, sid ,add} = this.props;
        add(sid,pid)
    }

    render() {

        let { pid, sid ,data,pCheck} = this.props;
        return  <li>
            <div className="shop-info">
                <input type="checkbox"
                       onClick={this.productCheck}
                       defaultChecked={data.checked}
                       defaultValue={data.checked}
                       className={ data.checked ?"checked":"unchecked"}/>
                <div className="shop-info-img">
                    <a href="#">
                        <img src={data.pic}/>
                    </a>
                </div>
                <div className="shop-info-text">
                    <h4>
                        {data.title}
                    </h4>
                    <div className="shop-brief">
                        <span>重量:3.3kg | true</span>
                        <span>颜色:标配版</span>
                        <span>版本:13.3英寸</span>
                    </div>
                    <div className="shop-price">
                        <div className="shop-pices">
                            ￥<b className="price">{data.price}</b>
                        </div>
                        <div className="shop-arithmetic">
                            <a className="minus" onClick={this.minusNum}>-</a>
                            <span className="num">{data.num}</span>
                            <a className="plus" onClick={this.addNum}>+</a>
                        </div>
                    </div>
                </div>
            </div>
        </li>;
    }
}


