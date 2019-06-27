import React, {Component} from "react"
import CartsContainer from "./pages/carts"
import Products from "./pages/products"
import ProductDetail from "./pages/product-detail"
import {BrowserRouter as Router ,Route,Link} from "react-router-dom"
import CounterContainer from "./pages/Counter"
import {Provider} from "react-redux"
import store from "./store"

/**
 * 1.npm install react-router-dom -S
 2.App.jsx 添加一个路由的组件就可以了
 BrowserRouter / VueRouter
 </BrowserRouter> / new BrowserRouter()
 <Route path="" component="" /> routes:[{}]
 <Link/> router-link tag="p"
 */


export default class App extends Component{


    // new VueRouter({routes:[{}])
    // <BrowserRouter/>

    render() {
        //html5 history api  hashbang react
        return <Provider store={store}>
            <Router>
                <Link to={"/c"}>首页</Link>||||<Link to={"/carts"}>购物车</Link>
                <Route path="/" exact={true}  component={Products}/>
                <Route path="/carts" component={CartsContainer}/>
                <Route path="/detail/:id" component={ProductDetail} />
                <Route path="/c" component={CounterContainer} />
            </Router>
        </Provider>
    }
}


