import React from 'react'
import cash from '../assets/image/hero.webp'
import { Container } from 'react-bootstrap'

const School = () => {
  return (
    <div className='bg-color wv-100 position-relative'>
      <Container>
        <div className='home full-height d-flex flex-column justify-content-between align-items-start pb-4'>
          <div className='d-flex justify-content-between w-100'>
            <div className='hero__description'>
              <h5 className='f-300'>
                Коуч ICF
                <br/>
                Наставник
                <br/>
                Тренер
                <br/>
                Хореограф
              </h5>
            </div>
            <div className='f-300 hero__description'>
              <span>
                Помогаю людям раскрыть свой потенциал через коучинг.
              </span>
            </div>
          </div>

          
          <div className='hero__cover w-100'>
            <div className='hero__fullname h-100 f-700 text-uppercase heading-font heading-color'>
                <div className='hero__name'>
                  <div>А</div>
                  <div>Н</div>
                  <div>Н</div>
                  <div>А</div>
                </div>
                  
                <div className='hero__surname d-flex justify-content-between'>
                  <div>Ц</div>
                  <div>А</div>
                  <div>Р</div>
                  <div>Е</div>
                  <div>В</div>
                  <div>А</div>
                </div>
            </div>
            <img className='hero__image-home object-fit-contain object-position__right' alt='hero img' src={cash}/>
          </div>
          <div className='hero__img-gradient' />
        </div>
      </Container>
    </div>
  )
}

export default School