import React from 'react'
import cash from '../assets/image/hero.webp'
import { Col, Container, Nav, NavLink, Row } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa";
import { ACHIEVEMENT_ROUTE, PROFILE_ROUTE } from '../utils/consts';
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
import PhraseDivider from '../utils/PhraseDivider';

const Сoaching = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='full-height position-relative mb-5 bg-color align-self-center'>
        <div className='heading-color d-flex justify-content-center h-100'>
            <h1 className='d-flex flex-column heading-font'>
              <div className='d-flex justify-content-between position-relative z-2 f-450'>
                <div className='d-inline'>К</div>
                <div className='d-inline'>О</div>
                <div className='d-inline'>У</div>
                <div className='d-inline'>Ч</div>
                <div className='d-inline'>И</div>
                <div className='d-inline'>Н</div>
                <div className='d-inline'>Г</div>
              </div>
            </h1>
            <div className='hero__image-card'>
              <img className='object-fit-cover h-100 w-100' src={cash}/>
            <div className='hero__img-gradient' />
          </div>
        </div>
      </div>

      <Container className='d-flex flex-column'>
      
        <div className='mb-5'>
          <div>
            <h2>
              Я знаю все о вопросах реализации потенциала, достижениях своих целей и улучшении качества своей жизни. Через коучинг я помогаю другим людям в работе над собой.
            </h2>
          </div>
          <div>
            <p>
            Меня зовут Анна Царева, я коуч ICF (ICF — International Coach Federation — Международная Федерация Коучинга)
            </p>
          </div>
          <div>
            <p>
            Имеется огромный опыт тренерства, на протяжении 18 лет тренирую танцоров, выращиваю из них лидеров, педагогов, чьи работы как сольных артистов, так и постановщиков вы видите на экранах федеральных каналов, кино, а так же на различных шоу самых разных форматов.
            </p>
          </div>
          <div className='align-self-start heading-color mb-3'>
            <Nav.Link className='d-flex align-items-center' onClick={() => navigate(ACHIEVEMENT_ROUTE)}>
              <FaArrowRight className='me-2'/>
              <h4 className='mb-0'>
                Мои достижения
              </h4>
            </Nav.Link>
          </div>
        </div>
      

        <div className='mb-5'>
          <div>
            <PhraseDivider header={'С чем вы можете ко мне прийти'} stroke={[1, 2, 5, 6, 7]}/>
          </div>

          <div className='mt-3 d-flex flex-wrap achieve__list justify-content-between'>
            <div className='d-flex'>
              <div className='me-2'>
                <span className='heading-color'>01</span>
              </div>
              <div className='w-100'>
                <h4>Цели и развитие</h4>
                <ul>
                  <li>Определение и постановка целей</li>
                  <li>Эффективное достижение</li>
                  <li>Как повысить доход</li>
                  <li>Как выйти на новый уровень</li>
                  <li>Развитие своих софт скилов</li>
                </ul>
              </div>
            </div>
            
            
            <div className='d-flex'>
              <div className='me-2'>
                <span className='heading-color'>03</span>
              </div>
              <div className='w-100'>
                <h4>Поиск и определение</h4>
                <ul>
                  <li>Своей миссии</li>
                  <li>Работы мечты</li>
                  <li>Способов реализации себя</li>
                </ul>
              </div>
            </div>

            <div className='d-flex'>
              <div className='me-2'>
                <span className='heading-color'>04</span>
              </div>
              <div className='w-100'>
                <h4>Отношения</h4>
                <ul>
                  <li>с людьми</li>
                  <li>с коллегами</li>
                  <li>с родителями</li>
                  <li>с детьми</li>
                  <li>с супругами</li>
                </ul>
              </div>
            </div>


            <div className='d-flex'>
              <div className='me-2'>
                <span className='heading-color'>05</span>
              </div>
              <div className='w-100'>
                <h4>Экзистенциальный кризис</h4>
                <ul>
                  <li>Кто я? Про что я?</li>
                  <li>Поиск новых смыслов и ценностей</li>
                  <li>Куда я иду и что я ищу?</li>
                  <li>Где я и моя уникальность?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      
        <div className='mb-5'>
          <div>
            <PhraseDivider header={'Как проходит сессия'} stroke={[1, 2]}/>
          </div>

          <div>
            <p>
            Для новых клиентов я провожу бесплатную установочную сессию, на которой мы с вами знакомимся, я рассказываю о принципах коучинга, что такое коучинг, о формате работы, отвечаю на все ваши вопросы и помогаю вам определить ваш запрос и если у нас с вами случается мэтч, то мы определяем время и дату рабочей сессии. Длительность установочной сессии 10−20 минут. ‌
            </p>
            <p>
            ‌На установочной сессии я не провожу разборов, не консультирую, не даю ответов по вашему запросу, <span className='heading-color'>работа над запросом происходит на рабочей сессии.</span>
            </p>
            <p>Если Ваш запрос не возможно решить через коучинг, я <span className='heading-color'>произвожу возврат средств.</span></p>
          </div>
        </div>
      

        <div className='mb-3'>
          <div>
            <PhraseDivider header={'Выбери свою сессию'} stroke={[1, 2]}/>
          </div>
          <Row className='border-bottom mb-2'>
            <Col xs={8}>
              <h4 className='heading-color'>Твоя первая сессия</h4>
              <p>
                Первая сессия для новых клиентов
              </p>
            </Col>
            <Col xs={4}>
              <h4 className='heading-color'>3500 ₽</h4>
            </Col>
          </Row>
          <Row className='border-bottom mb-2'>
            <Col xs={8}>
              <h4 className='heading-color'>Повторная сессия</h4>
              <p>
                Повторное обращение при уже пройденном первичном
              </p>
            </Col>
            <Col xs={4}>
              <h4 className='heading-color'>4000 ₽</h4>
            </Col>
          </Row>
          <Row className='border-bottom mb-2'>
            <Col xs={8}>
              <h4 className='heading-color'>Пакет малый</h4>
              <p>
                Включает две сессии
              </p>
            </Col>
            <Col xs={4}>
              <h4 className='heading-color'>7500 ₽</h4>
              <span className='d-block line'>8000 ₽</span>
            </Col>
          </Row>
          <Row className='border-bottom'>
            <Col xs={8}>
              <h4 className='heading-color'>Пакет средний</h4>
              <p>
                Включает четыре сессии
              </p>
            </Col>
            <Col xs={4}>
              <h4 className='heading-color'>16500 ₽</h4>
              <span className='d-block line'>18000 ₽</span>
            </Col>
          </Row>
        </div>

        <Footer title={['Сделай', 'шаг']} />     
      </Container>
    </>
    
  )
}

export default Сoaching