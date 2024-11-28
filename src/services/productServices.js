export async function getProductList(searched){
     const resp = await fetch(`${process.env.REACT_APP_HOST}/444/products${searched? (`?name_like=${searched}`): ""}`)
     if(!resp.ok){
        throw {status: resp.status, message: resp.statusText}//eslint-disable-line
    }
      const data = await resp.json()
      return data;
}

export async function getFeaturedProducts(){
    const resp = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`)
    console.log(resp)
    if(!resp.ok){
        throw {status: resp.status, message: resp.statusText}//eslint-disable-line
    }
    const data = await resp.json()
    return data;
}

export async function fetchSingleProduct(id){
    const resp = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`)
    if(!resp.ok){
        throw {status: resp.status, message: resp.statusText}//eslint-disable-line
    }
      const data = await resp.json()
      return data;
}