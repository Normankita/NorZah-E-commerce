import { Link } from "react-router-dom";

export const DashboardCard = ({item}) => {
  return (
    <div className="max-w-4xl m-auto p-2 mb-5 border dark:border-slate-700">
        <div className="flex justify-between text-sm m-2 font-bold dark:text-slate-200">
            <span>Order Id: {item.id}</span>
            <span>Total: ${item.total}</span>
        </div>
        {item.Cart.map((one)=>(
            <div className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5 ">
            <div className="flex">
                <Link to="">
                    <img className="w-32 rounded" src={one.poster? one.poster: one.local_image} alt="" />
                </Link>
                <div className="">
                    <Link to={`/products/${one.id}`}>
                        <p className="text-lg ml-2 dark:text-slate-200">{one.name}</p>
                    </Link>
                    <div className="text-lg m-2 dark:text-slate-200">
                        <span>${one.price}</span>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}
