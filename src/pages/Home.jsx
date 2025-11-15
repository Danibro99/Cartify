import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
    <Header/>
    <div className='container' style={{paddingBottom:"70px",paddingTop:"70px"}}>
      <div className='row my-5'>
        <div className="col-md-3 mb-2">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'250px'} src="/mascara.jpg" />
      <Card.Body className='text-center'>
        <Card.Title>Mascara</Card.Title>
        <Link to={'/products/id/view'} className='btn btn-secondary'>View More...</Link>
      </Card.Body>
    </Card>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home