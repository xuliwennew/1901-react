

let initState = {
    cartInfo:{}
}



let cartReducer = (state=initState,action)=>{
    switch (action.type) {
        case "INIT":
            let total = 0
            if (action.data) {
                action.data.shops.forEach((shop, sid) => {
                    shop.products.forEach((product, pid) => {
                        if (product.checked) {
                            total += product.price * product.num
                        }
                    })
                })
            }
            console.log(total)
            let newCart = action.data
            newCart.totalPrice = total
            return {
                cartInfo: newCart
            }

            break;
        case  "shopCartCheckAll":
            let nCartInfo =  state.cartInfo;
            nCartInfo.checked = !nCartInfo.checked
            let total2 = 0 ;
            let isChecked = nCartInfo.checked;
            nCartInfo.shops.forEach((shop, sid) => {
                shop.checked = isChecked
                shop.products.forEach((product, pid) => {
                    product.checked = isChecked
                    if(product.checked){
                        total2 += product.price*product.num;
                    }
                })
            })

            nCartInfo.totalPrice = total2


            return {cartInfo:nCartInfo}
            break

        case "addNum":
            console.log(action.p)
            return state
            break
        default:
            return state
            break;
    }
}

export default cartReducer
