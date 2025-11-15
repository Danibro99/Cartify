import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';


function Wishlist() {
  return (
    <>
    <Header></Header>
    <div className='container' style={{paddingBottom:"70px",paddingTop:"70px"}}>
      <div className="row my-5">
        <div className='row my-5'>
          <div className="col-md-3 mb-2">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'250px'} src="/mascara.jpg" />
      <Card.Body className='text-center'>
        <Card.Title>Mascara</Card.Title>
        <div className="d-flex justify-content-evenly my-1">
          <button className='btn fs-4'><FontAwesomeIcon className='text-danger' icon={faHeartCircleXmark}/></button>
          <button className='btn fs-4'><FontAwesomeIcon className='text-success'  icon={faCartPlus}/></button>
        </div>
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Wishlist