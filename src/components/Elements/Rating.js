
export const Rating = ({rating}) => {
    let Rating= Array(5).fill(false)
    for(let i=0; i<rating; i++){
        Rating[i]=true
    }
  return (
    <div>
      {Rating.map((sumo, index)=>(
        sumo? (<i key={index} className='text-lg bi bi-star-fill text-yellow-500 mr-1'></i>) : (<i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>)
      ))}
    </div>
  )
}

