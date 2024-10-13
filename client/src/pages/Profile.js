import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Context } from '../index';
import { CoursesDropdown, NoCoursesCard, LessonCard, SpinnerLoading } from '../components'
import { fetchUserCourses, fetchUserLessons } from '../http/userAPI';
import { observer } from 'mobx-react-lite';


const Profile = observer(() => {
  const { user } = useContext(Context)

  const [course, setCourse] = useState({})
  const [loading, setLoading] = useState(true)

  const { email } = user.user

  const selectCourse = (id) => {
    const course = user.courses.find(course => course.id === id)
    setCourse(course)
  }

  useEffect(() => {
    fetchUserCourses(email)
      .then(data => {
        user.setCourses(data)
        setCourse(data[0])
      })
      .finally(() => setLoading(false))
}, [email, user])

  useEffect(() => {
    if (!course || !course.id) return
    setLoading(true)
    fetchUserLessons(email, course.id).then(data => {
      user.setLessons(data)
    })
    .finally(() => setLoading(false))
  }, [email, course, user])

  if (loading) {
    return <SpinnerLoading />
  }

  return (
    user.courses.length > 0
    ?
    <Container>
      <CoursesDropdown courses={user.courses} selectCourse={selectCourse}/>
      <LessonCard course={course} lessons={user.lessons} />
    </Container>
    
    : <NoCoursesCard />
  )
})

export default Profile