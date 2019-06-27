

let initState = {
    cartInfo:{}
}



let cartReducer = (state=initState,action)=>{
    switch (action.type) {
        case "INIT":
            return {
                cartInfo:action.data
            }
            break;
        default:
            return state
            break;
    }
}

export default cartReducer
