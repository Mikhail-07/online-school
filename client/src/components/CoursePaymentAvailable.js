import React from 'react'
import paid from '../assets/image/payment.webp'
import free from '../assets/image/free.webp'
import { Button, Card, Col, Image, Row } from 'react-bootstrap'
import { LOGIN_ROUTE } from '../utils/consts'
import { useNavigate } from 'react-router-dom'


const CoursePaymentAvailable = ({price, action, auth}) => {
  const navigate = useNavigate()
  const credit = Math.ceil(price/6)

  return (
    price !== 0

    ?
    <Card.Body className='d-flex flex-column'>
    <Row>
      <h1>Курс можно оплатить частями или сразу</h1>
      <h6>Его необязательно оплачивать целиком - можно и в рассрочку.</h6> 
    </Row>
    <Row  className=' '>
      <Col xs="12" md="4">
        <Image className='course-payment-sticker' src={paid} />
      </Col>
      <Col sm="8" md={{ order: 'first'}} className='d-flex flex-wrap flex-column justify-content-end my-3'>
        
        <Row>
          <Col sm className='d-flex flex-column mb-4'>
            <h2>{credit} ₽/мес</h2>
            <span>Рассрочка на 6 месяцев</span>
          </Col>

          <Col sm className='d-flex flex-column mb-4'>
            <h2>{price} ₽</h2>
            <span>Стоимость за весь курс</span>
          </Col>
        </Row>
        <Button variant="outline-warning" onClick={auth ? action : () => navigate(LOGIN_ROUTE)}>Перейти к оплате</Button>
      </Col>
    </Row>
  </Card.Body>

  :
  <Card.Body className='d-flex flex-column'>
    <Row>
      <h1>Это бесплатный курс</h1>
      <h6>Ты можешь добавить его к себе в коллекцию и пройти в удобное время.</h6> 
    </Row>
    <Row  className=' '>
      <Col xs="12" md="4">
        <Image className='course-payment-sticker' src={free} />
      </Col>
      <Col sm="8" md={{ order: 'first'}} className='d-flex flex-wrap flex-column justify-content-end my-3'>
        <Button variant="outline-warning" onClick={auth ? action : () => navigate(LOGIN_ROUTE)}>Пройти бесплатно</Button>
      </Col>
    </Row>
  </Card.Body>

  )
}

export default CoursePaymentAvailable