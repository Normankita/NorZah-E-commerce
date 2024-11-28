export async function login(userDetail){
    const authOptions={
      
        method: "POST",
        headers:{"content-Type": "application/json"},
        body: JSON.stringify(userDetail)
  
      }
      const response = await fetch (`${process.env.REACT_APP_HOST}/login`,authOptions) 
      const data = await response.json()
      if(!response.ok){
        throw {status: response.status, message: response.statusText}//eslint-disable-line
      }     
      sessionStorage.setItem("userdata", JSON.stringify(data))
      return data;
}

export async function registerUser(userDetail){
   
      const response = await fetch (`${process.env.REACT_APP_HOST}/register`,{
        
        method: "POST",
        headers:{"content-Type": "application/json"},
        body: JSON.stringify(userDetail)
  
      }) 
      if(!response.ok){
        throw {status: response.status, message: response.statusText}//eslint-disable-line
      }
      const data = await response.json()
      sessionStorage.setItem("userdata", JSON.stringify(data))
      return data;
  
}