import { useCart } from "../../../contexts";
import { Link } from "react-router-dom";
export const CartCard = ({product}) => {
  const { name, price, poster, image_local, id}=product

  const {removeFromCart} = useCart()
  const setimage= poster? poster: image_local;
  return (
    <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
          <Link to={`/products/${id}`}>
            <img className="w-32 rounded" src={setimage} alt="" />
          </Link>
          <div className="">
            <Link to={`/products/${id}`}>
              <p className="text-lg ml-2 dark:text-slate-200">{name}</p>
            </Link>            
            <button onClick={()=>removeFromCart(product)} className="text-base ml-2 text-red-400">Remove</button>
          </div>
      </div>
      <div className="text-lg m-2 dark:text-slate-200">
        <span>${price}</span>
      </div>
    </div>
  )
}
