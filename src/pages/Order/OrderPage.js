 import { useTitle } from "../../hooks/useTitle";
import { OrderFail, OrderSuccess } from "./components"
 import { useLocation } from "react-router-dom"
export const OrderPage = () => {
  const {state} = useLocation()
  const status = state.status
  const error = state.error
  useTitle("Your Order")
  return (
    <main>
      { status? <OrderSuccess data={state.data}/> : <OrderFail error={error}/>}
    </main>
  )
}
