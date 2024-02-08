import React from 'react'
import { COURSES_ROUTE } from '../utils/consts';
import { NavLink } from 'react-router-dom';
import { Card, Container, Image } from 'react-bootstrap';
import sticker_default from '../assets/image/sticker_default.webp'

const NoCoursesCard = () => {
  return (
    <Container className='container-fullHeight'>
      <Card className='p-3 card-small d-flex flex-column justify-content-center align-items-center'>
        <Image className='course-payment-sticker' src={sticker_default} />
        <div className='d-flex flex-column text-center'>
          <span>
            В твоей библеотеке пока что нет курсов.
          </span>
          <span className='pr-1'>
            Но <NavLink className='ml-1' to={COURSES_ROUTE}>здесь</NavLink> много полезной информации
          </span>
        </div>
      </Card>
    </Container>
  )
}

export default NoCoursesCard