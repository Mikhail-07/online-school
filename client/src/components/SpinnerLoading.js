import React from 'react'
import { Spinner } from 'react-bootstrap'

const SpinnerLoading = () => {
  return ( 
    <div className='vh-100 w-100 d-flex justify-content-center align-items-center'>
      <Spinner animation={"grow"}/>
    </div>)
}

export default SpinnerLoading