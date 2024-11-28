import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [toshare, setToshare]= useState([])
    useEffect(()=>{

    async function fetchProducts() {
        const responce = await fetch(url)
        const data= await responce.json()
        setToshare(data)
    }
    fetchProducts()
    },[url])
    return {toshare};
}

