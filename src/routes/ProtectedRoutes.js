import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({children}) => {

    const userdetails = JSON.parse(sessionStorage.getItem("userdata"));
    
  return userdetails? children : <Navigate to="/login"/>
}

