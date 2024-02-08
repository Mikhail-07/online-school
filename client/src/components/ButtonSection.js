import React from 'react'
import { Nav } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'

const ButtonSection = () => {
  return (
    <div className='d-flex flex-column mb-3'>
      <Nav.Link className='d-flex flex-column align-items-center' href={"https://wa.me/79118369411?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8E!"}>
        <div className='heading-font f-400 d-flex justify-content-center flex-wrap'>
          <span className='me-2'>Сделай</span>
          <span className='stroke'>шаг</span> 
        </div>
        <div className='d-flex align-items-center'>
          <FaArrowRight className='me-2'/>
          <h4 className='mb-0'>
            Записаться
          </h4>
        </div>
      </Nav.Link>
    </div>
  )
}

export default ButtonSection