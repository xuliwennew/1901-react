import React,{Component} from "react"
import cartApi from "../apis/cartApi"
import Loading from "../components/Loading";


export default class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product:{}
        }
    }

    async componentWillMount(){
        let data = await cartApi.getProducts()
        //获取路由params /a?id=1 A  props {path,props:true}
        let {id} = this.props.match.params;
        let product = data.shops[0].products[id]

        //更新state
        this.setState({
            product:product
        })
    }

    render() {
        if(this.state.product){
            return (
                <div>
                    <h1>{this.state.product.title}</h1>
                </div>
            );
        }
        return <Loading/>
    }
}
