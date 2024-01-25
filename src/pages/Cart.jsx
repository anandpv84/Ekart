import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { emptycart, removeFromCart } from '../redux/slices/cartSlice';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';

function Cart() {

  const [total, settotal] = useState(0)
  const cartItems = useSelector((state) => state.cartReducer);
  let totalprice = 0;

  cartItems.forEach(item => {
    totalprice=totalprice+item.price
  });

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const handlecheckout =()=>{
    alert("Successfully placed the order")
    navigate('/')
    dispatch(emptycart())
  }

  return (
    <>

      <Button style={{ marginTop: "150px" }} className='btn btn-success ms-5'>
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          <i class="fa-solid fa-arrow-left me-3"></i>
          Back to Home</Link>
      </Button>

      <div className='row w-100'>
        <div className='col-lg-6 col-md-6 m-5'>
          <table className='table shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                cartItems?.length > 0 ?
                  cartItems.map((item, index) => (

                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td><img width={"50px"} src={item.thumbnail} alt="" /></td>
                      <td>{item.price}</td>
                      <td><Button onClick={() => dispatch(removeFromCart(item.id))} variant='outline-danger'><i class="fa-solid fa-trash"></i></Button></td>
                    </tr>

                  )) :
                  <p className='text-danger'>No Items in Cart</p>

              }

            </tbody>
          </table>
        </div>
        <div className='col-lg-4 col-md-4'>
          <div className='border shadow p-5'>
            <h3 className='text-primary'>Cart summary</h3>
            <h5>Total Number of Products: <span className='fw-bolder ms-2 text-warning'>{cartItems.length}</span></h5>
            <h5>Total Price: <span className='fw-bolder ms-2 text-warning'>{totalprice}</span></h5>
            <button className='btn btn-success rounded w-100 mt-3' onClick={handlecheckout}>Checkout</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Cart