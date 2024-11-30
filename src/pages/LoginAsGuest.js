import { Navigate } from 'react-router-dom'
export  const LoginAsGuest = ({children}) => {
    const tester = true;
  return <Navigate to="/login" state={{ tester }}/>
}


