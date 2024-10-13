import React from 'react'
import { CoursePaymentAdded, CoursePaymentAvailable } from './index'
import { Card, Col } from 'react-bootstrap'

const CoursePayment = ({price, action, auth, added}) => {

  return (
    <Col xs="auto" className='mb-5 card-payment'>
      <Card  className="bg-dark text-white p-4 card-shadow position-relative">
        {added 
          ? <CoursePaymentAdded />
          : <CoursePaymentAvailable price={price} action={action} auth={auth}/>}
      </Card>
    </Col>
  )
}

export default CoursePayment