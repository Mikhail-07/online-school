import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { AchieveCarousel, AchieveDescription } from './index'

const AchieveItem = ({ achieve }) => {
  if (achieve.category !== 'А') {
    return null;
  }

  return (
    <div className='w-100 mb-3' key={achieve.id}>
      <Row>
        {achieve.files.length > 0 ? (
          <>
            <Col md={6} className='position-relative mb-5 d-flex justify-content-center'>
              <h1 className='me-2 heading-font f-450 stroke slick__slider__header p-2'>
                {achieve.brand}.
              </h1>
              <AchieveCarousel files={achieve.files} />
            </Col>
            <Col md={6} className='position-relative mb-5'>
              <h1 className='me-2 heading-font f-450 stroke slick__description__header'>
                {achieve.brand}.
              </h1>
              <AchieveDescription achieve={achieve} />
            </Col>
          </>
        ) : (
          <>
            <Col>
              <h1 className='me-2 heading-font'>{achieve.brand}.</h1>
            </Col>
            <Col md={5} className='position-relative mb-5'>
              <AchieveDescription achieve={achieve} />
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default AchieveItem;
