import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container'
import { Context } from '../index';
import { useNavigate } from 'react-router-dom';
import { COURSES_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { fetchCourses } from '../http/coursesAPI';
import Footer from '../components/Footer';
import { Spinner } from 'react-bootstrap';
import SpinnerLoading from '../components/SpinnerLoading';

const CoursesPage = observer(() => {
  const [loading, setLoading] = useState(true)

  const { course } = useContext(Context);

  useEffect(() => {
    fetchCourses()
      .then(data => {
        console.log(data)
        course.setCourses(data)})
      .finally(() => setLoading(false))
  }, [course])

  const navigate = useNavigate();

  if (loading) {
    return <SpinnerLoading />
  }
  return (
    <Container className='mt-2 d-flex justify-content-center flex-wrap gap-5'>
      {course.courses.map(course =>
      <Card key={course.id} className='mb-5 card-shadow course__card'>
        <div className='course-card__card__image inherit-corner'>
          <Card.Img className='h-100 object-fit-cover inherit-corner' variant="top" src={process.env.REACT_APP_API_URL + course.img } />
        </div>
        <Card.Body className='d-flex justify-content-between  flex-column'>
          <h3>{course.title}</h3>
          <Card.Text>
            <span >
              {course.description}
            </span>
          </Card.Text>
          <h4 className='mb-4'>
            Стоимость:
            {course.price>0
            ? ` ${course.price}`
            : ` Бесплатно`
            }
            
          </h4>
          <Button variant="warning" className='align-self-center' onClick={() => navigate(COURSES_ROUTE + '/' + course.id)}>Подробнее о курсе</Button>
        </Card.Body>
      </Card>)}
      <Footer title={['Коуч', 'сессия']} /> 
    </Container>
  )
});

export default CoursesPage