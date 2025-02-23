import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Rating from '../components/Rating';

const Productview = () => {
    let params = useParams()
    let pid = params.product_id
    const [product, setProduct] = useState({})
    let [qty, setQty] = useState(1)

    useEffect(()=>{
      axios.get(`https://dummyjson.com/products/${pid}`)
      .then(res => setProduct(res.data))
      .catch(err=> console.log('Something Went Wrong'))
    },[])

    const addtocart=()=>{

        // fetching local storage data if exist
        let cart = JSON.parse(localStorage.getItem('cart')) || []

        // setting object variables for product data
        let product_cart_data = {
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: qty,
            image : product.images,
            category: product.category,
            discount:product.discountPercentage
            }

    // set data to the local storage if not exist
    let existingItem  = cart.find((item)=> item.id === product.id)
    if (existingItem){
        toast.error("Item already Exist")

    }
    else{
        cart.push(product_cart_data)
        localStorage.setItem('cart', JSON.stringify(cart))
        toast.success("Item Added to Cart")
    }
    }
    
    const decrease=()=>{
        if(qty>1){
            setQty(qty-1)
        }
        else{
            toast.warning("You must order minimun 1 unit.")
        }

    }


  return (
    <>
        <ToastContainer theme='colored' position='top-right'/>
<div class="container my-5 shadow rounded-3 bg-success-subtle p-3">
        <div class="d-md-flex justify-content-evenly">
            <div class="col-md-4">
            {product.images && product.images.length > 1 ? (
                <img src={product.images[0]} alt="product" width="100%" height="100%" />
                ) : (
                <img src={product.images} alt="product" width="100%" height="100%" />
                )}
            </div>

            <div class="col-md-6">
                <p>
                    <a href="/">Home</a> /
                    <a href="/products">Products</a> /
                    <small class="text-secondary">{product.title}</small>
                </p>

                <h2 className='mb-0'>{product.title}</h2>
                <small class="text-secondary">{product.category}</small>

                <p class="fw-bold mt-3">Price : <span class="text-success">{product.price}</span></p>

                <p class="fw-bold">Quantity</p>
                <div class="d-flex col-5">
                    <button class="btn btn-secondary" onClick={decrease}> - </button>
                    <input type="text" value={qty} class="form-control w-25 text-center" readonly/>
                    <button class="btn btn-secondary" onClick={()=>setQty(qty+1)}> + </button>
                </div>

                
                {
                    product.rating && <Rating rating={product.rating}/>
                }
                

                <div class="d-flex mt-5">
                    <button class="btn btn-danger me-5">Buy Now</button>
                    <button class="btn btn-warning" onClick={addtocart}>Add to Cart</button>
                </div>
            </div>

        </div>
        <hr/>
        <p class="fw-bold m-0">Description</p>
        <p class="m-0 text-secondary">{product.description}</p>
    </div>



      
    </>
  )
}

export default Productview
