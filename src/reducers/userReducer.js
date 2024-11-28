export const userReducer =( state, action)=>{
    
    const {type, payload} = action;

    switch(type){
        case "LOG_IN":
            return{...state, user: payload.user, token: payload.token}
        case "LOG_OUT":
            return{...state, user: payload.user, token: payload.token}
        default:
            throw new Error("No case Found")
    }
}