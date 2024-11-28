import {CartEmpty, CartList} from './components'
import { useCart } from '../../contexts'
import { useTitle } from '../../hooks/useTitle';
export const CartPage = () => {
  useTitle("Cart")
const {cartList} = useCart()
  return (
    <main> 
      {cartList.length? <CartList/>: <CartEmpty/>}         
    </main>
  )
}
