import { useEffect, useState } from 'react';
import { ProductCard } from '../../../components'
import { getFeaturedProducts } from '../../../services/productServices';
import { toast } from 'react-toastify';



export const FeaturedProducts = () => {

  const [proucts, setProducts] = useState([])
useEffect(()=>{
  async function fetchMy(){
   try{
    const data = await getFeaturedProducts()
    setProducts(data)
   }catch(error){
    toast.error(  `${error.status}, ${error.message}` )

   }
  }
  fetchMy()
},[])
  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
        <div className="flex flex-wrap justify-center lg:flex-row">
            {proucts.map((product)=>(
              <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    </section>
  )
}