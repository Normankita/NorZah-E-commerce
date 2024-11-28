import { userReducer } from "../reducers";

const { createContext, useContext, useReducer } = require("react");

const firstUser={
    user: [],
    token:null,
}

const UserContext = createContext(firstUser);

export const UserProvider = ({children})=>{

    const [state, dispatch] = useReducer(userReducer, firstUser);

    const initialize=()=>{
        const newUser = JSON.parse(sessionStorage.getItem("userdata"))
        const ruser= newUser? newUser.user : [];
        const token = newUser? newUser.accessToken: null;
        dispatch({
            type: "LOG_IN",
            payload: {
                user: ruser,
                token: token
            }
        })
    }
    const terminate = ()=>{
        const ruser= [];
        const token = null;

        dispatch({
            type: "LOG_IN",
            payload: {
                user: ruser,
                token: token
            }
        })
        
        sessionStorage.removeItem("userdata")
    }
    
    const value ={
        user:state.user,
        token:state.token,
        initialize,
        terminate
    }
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
export const useUser =()=>{
    const userdetails = useContext(UserContext);
    return userdetails;
}