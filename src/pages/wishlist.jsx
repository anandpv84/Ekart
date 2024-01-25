import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Row,Col } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlistReducer);
const dispatch=useDispatch()
const handleWishlist = (item)=>{
  dispatch(addToCart(item));
  dispatch(removeFromWishlist(item.id));
}
  return (
    <>
      <Button style={{ marginTop: "100px" ,marginBottom:"40px"}} className='btn btn-success ms-5'>
        <Link to={"/"} style={{textDecoration:"none",color:"white"}}>
          <i class="fa-solid fa-arrow-left me-3"></i>
          Back to Home</Link>
      </Button>

      <Row>
        {
          wishlistItems?.length > 0 ?
            wishlistItems.map((item) => (
              <Col  className='mb-5 ms-2'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.thumbnail} height={'200px'} />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 20)}</Card.Title>
                    <Card.Text>
                      {item.description.slice(0, 50)}...
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button onClick={()=> dispatch(removeFromWishlist(item.id))} variant="outline-danger"><i class="fa-solid fa-trash"></i></Button>
                      <Button onClick={()=>handleWishlist(item)} variant="outline-success"><i class="fa-solid fa-cart-plus"></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )) :
            <p>no item in wishlist</p>
        }
      </Row>
    </>

  )
}

export default Wishlist