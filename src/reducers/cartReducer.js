export const cartReducer = (state, action)=>{
    const {type, payload}= action;
    
    switch(type){

        case "ADD_TO_CART":
            return {...state, cartList: payload.newproduct}
        case "CLEAR_CART":
            return {...state, cartList: payload.cartList, total: payload.total}
        case "REMOVE_FROM_CART":
            return {...state, cartList: payload.newproduct}
        case "UPDATE_TOTAL":
            return {...state, total: payload.total}

        default:
            throw new Error("I am not handled ")
    }
}