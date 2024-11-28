export const filterReducer = (state, action) => {
  const {type, payload} = action;
  switch(type){
    case "PRODUCT_LIST":
        return{ productList: payload.products}
    case"BEST_SELLER":
        return {...state, bestSeller: payload.bestSeller}
    case "INSTOCKS_ONLY":
        return{...state, inStocks:payload.inStocks }
    case "RATING":
        return {...state, rating: payload.rating}
    case "SORT_BY":
        return {...state, sortBy: payload.sortBy}
    case "RESET_ALL":
        return {...state, bestSeller:payload.bestSeller, inStocks:payload.inStocks, sortBy:payload.sortBy, rating:payload.rating}
    default:
         throw new Error("case not found")
  }
}
