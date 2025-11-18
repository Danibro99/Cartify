import React, { Profiler, useEffect } from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/productSlice';


function Home() {

  const dispatch = useDispatch()
  const {loading,allProducts,error} = useSelector(state=>state.productReducer)
  console.log(allProducts);
  

  useEffect(()=>{
    dispatch(getAllProducts())
  },[])
  return (
    <>
    <Header/>
    <div className='container' style={{paddingBottom:"70px",paddingTop:"70px"}}>
      {
      loading?
      <div className="text-center my-5"><h1>Loading...</h1></div>:
        <div className='row my-5'>
        {
          allProducts.length<0?
          <h2 className='text-center'>Products Not found</h2>:
          allProducts?.map(product=>(
            <div key={product?.id} className="col-md-3 mb-2">
          <Card style={{ width: '18rem'}} className='border'>
      <Card.Img variant="top" height={'250px'} src={product.thumbnail } />
      <Card.Body className='text-center'>
        <Card.Title>{product.title}</Card.Title>
        <Link to={`/products/${product?.id}/view`} className='btn btn-secondary'>View More...</Link>
      </Card.Body>
    </Card>
        </div>
          ))
        }
      </div>
      }
    </div>
    </>
  )
}

export default Home