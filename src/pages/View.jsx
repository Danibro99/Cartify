import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function View() {
  return (
    <>
    <Header></Header>
    <div className='container py-5' style={{paddingBottom:"70px",paddingTop:"70px"}}>
      <div className="row my-5">
        <div className="col-md-6 text-center">
          <img src="/mascara.jpg" alt="Mascara image" className='img-fluid' height={'250px'}/>
        <div className="d-flex justify-content-evenly mt-5">
          <button className='btn btn-primary'>ADD TO WISHLIST</button>
          <button className='btn btn-success'>ADD TO CART</button>
        </div>
        </div>
        <div className="col-md-6 py-5">
          <h1 className='ms-1'>Title</h1>
          <h3 className='text-danger'>$ Price</h3>
          <h4>Brand:</h4>
          <h4>category:</h4>
          <h4 className='text-bold'>Description:</h4>
          <h5>Client Reviews</h5>
          {/* duplicate div */}
          <div className="border rounded p-3 shadow">
            <p><span className='fw-bolder'>username:</span>message
            </p>
            <p>Rating: number <FontAwesomeIcon icon={faStar} /></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default View