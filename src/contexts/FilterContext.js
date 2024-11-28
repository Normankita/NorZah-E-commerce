import { createContext, useContext, useReducer } from "react";
import { filterReducer } from '../reducers'
const initialFilterContext={
    productList:[],
    bestSeller: false,
    inStocks: false,
    sortBy:null,
    rating:null,
}

const filterContext= createContext(initialFilterContext);

export const FilterProvider=({children})=>{

    const [state, dispatch] = useReducer(filterReducer, initialFilterContext);

    const initializeProducts =(products)=> {
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products,
            },
        })
    }

     function bestSeller(products) {
        return state.bestSeller? products.filter(product=> product.best_seller===true): products;
    }
    function inStocks(products){
        return state.inStocks? products.filter(product=>product.in_stock===true): products;
    }
    function rating(products){
        if(state.rating==="4STARABOVE"){
            return products.filter(product=> product.rating>=4)
        }
        if(state.rating==="3STARABOVE"){
            return products.filter(product=> product.rating>=3)            
        }
        if(state.rating==="2STARABOVE"){
            return products.filter(product=> product.rating>=2)
        }
        if(state.rating==="1STARABOVE"){
            return products.filter(product=> product.rating>=1)
        }else return products
    }
    function sortBy(products){
        if(state.sortBy==="lowtohigh"){
            return products.sort((a,b)=>Number(a.price)-Number(b.price))
        }
        if(state.sortBy==="hightolow"){
            return products.sort((a,b)=>Number(b.price)-Number(a.price))
        }else return products
    }
    function clearFilter(){
        dispatch({
            type: "RESET_ALL",
            payload:{
                bestSeller: false,
                inStocks: false,
                sortBy:null,
                rating:null,
            }
        })
    }
    const sortedProductList = rating(sortBy(inStocks(bestSeller(state.productList))))

   const  value={
    clearFilter,
    dispatch,state,
    productList: sortedProductList,
    initializeProducts
    }
    return(
        <filterContext.Provider value={value}>
            {children}
        </filterContext.Provider>
    )
}

export const useFilter=()=>{
    const filter= useContext(filterContext)
    return filter;
}