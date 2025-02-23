import { FaRegStar,FaStar,FaStarHalfAlt } from "react-icons/fa";

import React from 'react'

const Rating = (props) => {
    const rating  = props.rating
    let stars = []
    for(let i=1;i<=5;i++){
        if(i<=rating){
            // 1 <= 4.94
            // 2 <= 4.94
            // 3 <= 4.94
            // 4 <= 4.94
            stars.push(<FaStar key={i} />)
        }
        else if(i == Math.ceil(rating) && !Number.isInteger(rating)){

            // 5 == 5 && True
            stars.push(<FaStarHalfAlt key={i} />)

        }
        else{
            stars.push(<FaRegStar key={i} />)
        }

    }

  return (
    <>
    <p className="fw-bold">Ratings : <span className="text-warning">{stars}</span></p>
      
    </>
  )
}

export default Rating
