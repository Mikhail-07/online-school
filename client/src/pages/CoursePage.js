import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Row, Image, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import CurriculumAccordion from '../components/CurriculumAccordion';
import { fetchCourse, registrationOnCourse } from '../http/coursesAPI'
import { Context } from '../index';
import Footer from '../components/Footer';
import ButtonSection from '../components/ButtonSection';
import CoursePayment from '../components/CoursePayment';
import CurriculumForOneLesson from '../components/CurriculumForOneLesson';
import { PROFILE_ROUTE } from '../utils/consts';
import { fetchUserCourses } from '../http/userAPI';
import { observer } from 'mobx-react-lite';

const CoursePage = observer(() => {
  const navigate = useNavigate()
  const [course, setCourse] = useState({})
  const { user } = useContext(Context)
  const { email } = user.user
  const { id } = useParams()

  useEffect(() => {
    fetchCourse(id)
      .then(data => setCourse(data))
    if (user.isAuth) fetchUserCourses(email).then(data => {user.setCourses(data)})
}, [id, email])

  const signUpForCourse = async () => {
    registrationOnCourse({email, courseId: id}).then(() => navigate(PROFILE_ROUTE))
  }


  return (
    course.title
    ?
    <Container className='d-flex flex-column align-items-center course_card'>
      <div className='text-center mt-2'>
        <h1>
          Курс «{course.title}»
        </h1>
        <h6>
        {course.subTitle}
        </h6>
      </div>
      <Card className="bg-dark text-white w-100 my-3">
        <Card.Img  className='w-100 course-card__card__image inherit-corner object-fit-cover'  src={process.env.REACT_APP_API_URL + course.img } />
      </Card>

      <div className='mx-2 w-100'>
        <div>
          <h2>Программа курса</h2>
          <p>На полное прохождение курса потребуется 3 месяца.</p>
        </div>
        {course?.lessons?.length>1
          ? <CurriculumAccordion course={course} />
          : <CurriculumForOneLesson course={course} />
        }
      </div>

      <CoursePayment price={course.price} action={signUpForCourse} auth={user.isAuth} added={user.courses.find(item => item.id === course.id)}/>

      <Footer title={['Коуч', 'сессия']} /> 
    </Container>
    : ''
      
  );
})

export default CoursePage