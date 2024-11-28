const getSession =()=>{
    const userDet = JSON.parse(sessionStorage.getItem("userdata"))
    const id= userDet.user.id   
    const token = userDet.accessToken
    return {id: id, token: token}
}

export async function fetchOrders(){
    const {id, token}=getSession()
    
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?userID=${id}`, {
        method: "GET",
        headers:{"Content-Type": "application/json", Authorization : `Bearer ${token}` }
      })
      if(!response.ok){
        throw {status: response.status, message: response.statusText};//eslint-disable-line
        
      }
      const data = await response.json()
      return data;
}

export async function sendOrders(useData){
    const {token} = getSession()
    const options={
        method:"POST",
        headers: {"Content-Type":"application/json", Authorization :`Bearer ${token}`},
        body :JSON.stringify(useData)
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, options)
    if(!response.ok){
        throw {status: response.status, message: response.statusText};//eslint-disable-line
        
      }
    const data = await response.json()
    return data
}

export async function fetchUser(){
    const {id, token} = getSession()
    const options={
        method: "GET",
        headers:{"Content-Type": "application/json", Authorization : `Bearer ${token}` }
          
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${id}`, options)
    if(!response.ok){
        throw {status: response.status, message: response.statusText};//eslint-disable-line
        
      }
    const data = await response.json()
    return data;
}