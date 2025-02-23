import React, { useState } from 'react'
import Slider from '../components/Slider'
import Card from '../components/Card'
import axios from 'axios'

const Homepage = () => {
  const [products,setProducts] = useState([])

  axios.get('https://dummyjson.com/products')
  .then(res => setProducts(res.data.products))
  .catch(err => console.log(err))


  return (
    <div>
      
      <Slider/>
      <div className='container-fluid rounded-3 mb-4'>
        <h2 className='text-center text-success bg-dark-subtle'>Products</h2>
        <hr />
        <div class="d-md-flex justify-content-evenly mb-4" id='products'>
        {
          products.slice(0,4).map((item)=>(
            <Card itemData = {item} />

          ))
        }
        </div>



      </div>
     
    </div>
  )
}

export default Homepage
