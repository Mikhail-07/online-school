import React from 'react'
import sticker_queen from '../assets/image/sticker_queen.webp'
import { useNavigate } from 'react-router-dom'
import { PROFILE_ROUTE } from '../utils/consts'
import { Button, Card, Col, Image, Row } from 'react-bootstrap'

const CoursePaymentAdded = () => {
  const navigate = useNavigate()
  return (
    <Card.Body className='d-flex flex-column'>
      <Row>
        <h1>Курс уже твой!</h1>
        <h6>Ты можешь найти его в своей коллекции в личном кабинете.</h6> 
      </Row>
      <Row  className=' '>
        <Col xs="12" md="4">
          <Image className='course-payment-sticker' src={sticker_queen} />
        </Col>
        <Col sm="8" md={{ order: 'first'}} className='d-flex flex-wrap flex-column justify-content-end my-3'>
          <Button variant="outline-warning" onClick={() => navigate(PROFILE_ROUTE)}>Личный кабинет</Button>
        </Col>
      </Row>
    </Card.Body>
  )
}

export default CoursePaymentAdded