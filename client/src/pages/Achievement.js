import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../assets/image/achievement.webp'
import AchieveTabs from '../components/AchieveTabs'
import { Context } from '../index'
import { fetchAchive } from '../http/adminAPI'
import { observer } from 'mobx-react-lite'
import Footer from '../components/Footer'
import AchieveCarousel from '../components/AchieveCarousel'
import AchieveDescription from '../components/AchieveDescription'
//1703/ Миражи/ Бузова/ ТОП ДИСКО ПОП/ басков 


const Achievement = observer(() => {
  
  const achieveStore = useContext(Context).achieve

  useEffect(() => {
    fetchAchive().then(data => {
      achieveStore.setAchieve(data)})
  }, [])

  // const setMedia = (id) => {
  //   console.log('click')
  //   fecthAchiveMedia(id).then(data => achieveStore.setMedia(data))
  // }

  return (
    <>
      <div className='full-height position-relative mb-4 bg-color align-self-center'>
        <div className='heading-color d-flex justify-content-center'>
            <h1 className='d-flex flex-column heading-font'>
              <div className='d-flex justify-content-between f-450 position-relative z-2'>
                <div className='d-inline'>К</div>
                <div className='d-inline'>А</div>
                <div className='d-inline'>Р</div>
                <div className='d-inline'>Ь</div>
                <div className='d-inline'>Е</div>
                <div className='d-inline'>Р</div>
                <div className='d-inline'>А</div>
              </div>
            </h1>
            <div className='hero__image-card'>
              <img className='object-fit-cover h-100 w-100' src={img}/>
            <div className='hero__img-gradient' />
          </div>
        </div>
      </div>
    <Container className='d-flex flex-column'>
      

      <div>
        <p>
        На протяжении 18 лет тренирую танцоров, выращиваю из них лидеров, педагогов, чьи работы как сольных артистов, так и постановщиков вы видите на экранах федеральных каналов.
        </p>
      </div>

      <div className='d-flex flex-column py-3'>
        <span className='heading-font f-450'>
          <span className='pe-2'>Мои</span> 
          <span className='stroke'>работы</span>
        </span>
      </div>

      <div>
      {
        achieveStore.achieve.map(achieve => {
          if (achieve.category === 'А') return (
            <div className='w-100 mb-3' key={achieve.id}>
              <Row>
                {
                  achieve.files.length>0 
                  ?
                    <>
                      <Col md={6} className='position-relative mb-5 d-flex justify-content-center'>
                        <h1 className='me-2 heading-font f-450 stroke slick__slider__header p-2'>{achieve.brand}.</h1>
                        <AchieveCarousel files={achieve.files}/>
                      </Col>
                      <Col md={6} className='position-relative mb-5'>
                        <h1 className='me-2 heading-font f-450 stroke slick__description__header'>{achieve.brand}.</h1>
                        <AchieveDescription achieve={achieve}/>
                      </Col>
                    </>
                  : 
                    <>
                      <Col> 
                        <h1 className='me-2 heading-font'>{achieve.brand}.</h1>
                      </Col>
                      <Col md={5} className='position-relative mb-5'>
                        <AchieveDescription achieve={achieve}/>
                      </Col>
                    </>
                }
                
              </Row>
            </div>
          )
        })
      }
      </div>
       
      
      
      <div className='mb-4'>
        <div className='d-flex flex-column mb-4'>
          <span className='heading-font f-450'>
            <span className='pe-2'>Другие</span> 
            <span className='stroke'>работы</span>
          </span>
        </div>
        <span>Нажмите, чтобы посмотреть подробнее</span>
      </div>
      

      <AchieveTabs achieves={achieveStore.achieve} roles={achieveStore.roles} canva={true}/>
      <Footer title={['Коуч', 'сессия']} />     
    </Container>
    </>
  )
  
})

export default Achievement