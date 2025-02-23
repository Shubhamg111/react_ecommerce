import React, { Fragment, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Cartpage = () => {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setCartItem(cart);
  }, []);


  const deleteItem=(cart_id)=>{
    const cart = JSON.parse(localStorage.getItem("cart"));
    const newCart = cart.filter((item) => item.id !== cart_id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCartItem(newCart);
    toast.success("Item deleted SuccessFully.")
  }

  return (
    <>
    <ToastContainer position="top-center" theme="colored" />


      {
        cartItem.length <= 0 ? (
         <div className="d-flex my-5 justify-content-center align-items-center" >
           <h1 className="text-center text-info display-1">Your Cart is Empty.</h1>
           <img src="https://img.freepik.com/free-vector/girl-pushing-shopping-trolley_1308-77594.jpg?t=st=1737369594~exp=1737373194~hmac=263d141e4c45bfd0cc5b7ef5e2da014560cc3d2ce043c4c82b59faeac0c28206&w=740" alt="" width={'300px'} />

         </div>
        ) : (

       
      <div className="d-flex justify-content-evenly my-5">
        <div className="col-md-8">
          <table className="table table-bordered table-striped table-hover shadow rounded-3">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cartItem.map((item, i) => (
                <Fragment key={i}>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.category}</td>
                    <td className="text-center">
                      {item.image && item.image.length > 1 ? (
                        <img src={item.image[0]} alt="product" width="60px" />
                      ) : (
                        <img src={item.image} alt="product" width="60px" />
                      )}
                    </td>

                    <td>
                      <button className="btn btn-danger" onClick={()=>deleteItem(item.id)}>
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-3">
            <section className="col-md-12 shadow p-3">
                <h4>Cart Summary</h4>
                <hr/>
                <p className="fw-semibold text-secondary">Total Quantity : <span className="text-success">
                    {
                      cartItem.reduce((acc,item)=>(
                        acc+item.quantity
                      ),0)
                    } units
                  </span></p>
                <p className="fw-semibold text-secondary">Total Price : <span className="text-success">
                  Rs.{
                    cartItem.reduceRight((acc,item)=>(
                      acc + item.price*item.quantity
                    ),0).toFixed(2)
                  }
                  </span></p>

                  <p className="fw-semibold text-secondary">Discount : <span className="text-success">
                    {
                      cartItem.reduceRight((acc,item)=>(
                        acc + item.discount
                      ),0).toFixed(2)
                    }%
                    
                    </span></p>
                    <hr />
                  <p className="fw-bold">Grand Total : <span className="text-danger">
                    Rs.{

                      cartItem.reduceRight((acc, item) => {
                        const discountedPrice = item.price * (1 - (item.discount || 0) / 100);
                        return acc + discountedPrice * item.quantity;
                      }, 0).toFixed(2)
                    }
                    </span></p>
                <hr/>
                <button className="btn btn-success">Checkout</button>
            </section>
        </div>
      </div>

    )
    }

    </>
  );
};

export default Cartpage;
