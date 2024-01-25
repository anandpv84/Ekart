import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>

      <div className='pb-3 bg-primary'>
        <div className='gg d-flex justify-content-center align-items-center pt-5 bg-primary'>
          <div className='footer d-flex align-items-center justify-content-evenly'>
            <div className='website' style={{ width: '400px' }}>
              <h4> <i class="fa-solid fa-cart-shopping text-warning me-2"></i>E KART</h4>
              <p>the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing so the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing so</p>
            </div>
            <div className='links d-flex flex-column ms-5'>
              <h4>Links</h4>
              <Link to='/' className='mt-2' style={{ textDecoration: 'none', color: 'white' }}>Landing page</Link>
              <Link to='/home' className='mt-1' style={{ textDecoration: 'none', color: 'white' }}>Home page</Link>
              <Link to='/watch' className='mt-1' style={{ textDecoration: 'none', color: 'white' }}>Watch history</Link>
            </div>
            <div className='guides d-flex flex-column ms-5'>
              <h4>Guides</h4>
              <Link to='https://react.dev/' className='mt-2' style={{ textDecoration: 'none', color: 'white' }}>React</Link>
              <Link to='https://react-bootstrap.netlify.app/' className='mt-1' style={{ textDecoration: 'none', color: 'white' }}>React bootstrap</Link>
              <Link to='https://bootswatch.com/' className='mt-1' style={{ textDecoration: 'none', color: 'white' }}>Boots watch</Link>
            </div>
            <div className='ms-5'>
              <h4>Contact Us</h4>
              <div className='d-flex mt-4'>
                <input type="text" className='bg-primary form-control' placeholder='enter your email' />
                <button className='ms-3 btn btn-light'>subscribe</button>
              </div>
              <div className=' d-flex justify-content-evenly align-items-center'>
                <Link className='mt-3'><i class="fa-brands fa-twitter"></i></Link>
                <Link className='mt-3'><i class="fa-brands fa-facebook"></i></Link>
                <Link className='mt-3'><i class="fa-brands fa-linkedin"></i></Link>
                <Link className='mt-3'><i class="fa-brands fa-instagram"></i></Link>
              </div>
            </div>
          </div>
        </div>
        <p className='text-center mt-5'>Copyright &copy; 2023 mediaplayer </p>
      </div>

    </>
  )
}

export default Footer