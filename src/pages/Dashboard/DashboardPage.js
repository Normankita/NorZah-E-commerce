import { useEffect, useState } from "react";
import { DashboardCard, DashboardEmpty } from "./components"
import { fetchOrders } from "../../services/dataServices";
import { toast } from "react-toastify";
import { useTitle } from "../../hooks/useTitle";

export const DashboardPage = () => {

  const [cart, setCart]= useState([])



  useEffect(()=>{
    async function fetchHistory(){
    try{
      const data = await fetchOrders()
      setCart(data)
    }catch(error){
      toast.error(  `${error.status}, ${error.message}` )
    }
    }
    fetchHistory()
  },[])
  useTitle("Dashboard")

  return (
    <main>
      {cart.length && <section>
        {cart.map((item)=>(
          <DashboardCard item={item}/>
        ))}       
        </section>}
      {!cart.length && <section>
        <DashboardEmpty/>
        </section>}
    </main>
  )
}
