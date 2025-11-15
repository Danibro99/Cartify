import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Cart() {
  return (
    <>
    <Header></Header>
    <div className='container py-5'>
    <div className="my-5">
      <h1 className='text-danger'>Cart Summary</h1>
      <div className="row mt-5">
        <div className="col-md-8 rounded p-5 border" >
          <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>title</td>
              <td><img src="/mascara.jpg" alt="product" width={'50px'} height={'50px'} /></td>
              <td>
                <div className="d-flex">
                  <button className='btn fs-3 fw-bold'>-</button>
                  <input type="text" readOnly className='form-control' value={10} style={{width:"50px",background:"transparent"}}  />
                  <button className='btn fs-4 fw-bold'>+</button>
                </div>
              </td>
              <td>Price</td>
              <td>
                <button className='btn btn-danger' ><FontAwesomeIcon icon={faTrash} /></button>
              </td>
            </tr>
          </tbody>
          </table>
          </div>
        <div className="col-md-4">
          <div className="rounded border my-5 p-5">
            <h3 className='fw-bold'>Total Amount: <span className='text-danger'>$ 10</span></h3>
            <hr />
            <div className="d-grid mt-2">
              <button className='btn btn-success'>Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Cart