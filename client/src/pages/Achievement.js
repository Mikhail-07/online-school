import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import img from '../assets/image/achievement.webp';
import { Context } from '../index';
import { fetchAchive } from '../http/adminAPI';
import { observer } from 'mobx-react-lite';
import { Footer, AchieveItem, AchieveTabs } from '../components/index'

const Achievement = observer(() => {
  const achieveStore = useContext(Context).achieve;

  useEffect(() => {
    fetchAchive().then((data) => {
      achieveStore.setAchieve(data);
    });
  }, [achieveStore]);

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
            <img className='object-fit-cover h-100 w-100' alt='achieve img' src={img} />
            <div className='hero__img-gradient' />
          </div>
        </div>
      </div>
      <Container className='d-flex flex-column'>
        <div>
          <p>
            На протяжении 18 лет тренирую танцоров, выращиваю из них лидеров, педагогов, чьи работы
            как сольных артистов, так и постановщиков вы видите на экранах федеральных каналов.
          </p>
        </div>

        <div className='d-flex flex-column py-3'>
          <span className='heading-font f-450'>
            <span className='pe-2'>Мои</span>
            <span className='stroke'>работы</span>
          </span>
        </div>

        <div>
          {achieveStore.achieve.map((achieve) => (
            <AchieveItem key={achieve.id} achieve={achieve} />
          ))}
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

        <AchieveTabs achieves={achieveStore.achieve} roles={achieveStore.roles} canva={true} />
        <Footer title={['Коуч', 'сессия']} />
      </Container>
    </>
  );
});

export default Achievement;
