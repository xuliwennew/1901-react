import React, {Component} from "react"





export default class CartFooter extends Component{


    render() {

        let { data} = this.props;
        return <div className="payment-bar">
            <div className="all-checkbox">
                <input type="checkbox"
                       defaultValue={data.checked}
                       defaultChecked={data.checked}
                       className={data.checked?"checked":"unchecked"}/>
                全选
            </div>
            <div className="shop-total">
                <strong>
                    总价：
                    <i id="AllTotal" className="total">{data.totalPrice}</i>
                </strong>
                <span>减免：100</span>
            </div>
            <a href="#" className="settlement">结算</a>
        </div>;
    }
}


