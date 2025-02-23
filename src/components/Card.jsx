import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <>
            <div class="card border shadow rounded m-2">
              <img src={props.itemData.images[0]} class="card-img-top" alt="p1" />
              <div class="card-body text-center">
            <h5 class="card-title" title={props.itemData.title}>{props.itemData.title.slice(0,20)}...</h5>
                <p class="fw-bold">Price : <span class="text-success">Rs. {props.itemData.price}</span></p>
               
                <Link to={`/productview/${props.itemData.id}`} class="text-danger btn btn-warning btn-sm"><i class="bi bi-eye-fill"></i> View More </Link>
              </div>
            </div>
    </>
          

  )
}

export default Card
