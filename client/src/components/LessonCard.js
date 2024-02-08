import React from 'react'
import { Card } from 'react-bootstrap'
import CourseHeader from './CourseHeader'
import LessonAccordion from './LessonAccordion'
import { observer } from 'mobx-react-lite'

const LessonCard = observer(({course, lessons}) => {
  return (
    (course && lessons?.length > 0)
    ?
    <Card className='my-4 p-3'>
      <CourseHeader title={course.title} description={course.description}/> 
      <LessonAccordion lessons={lessons} />
    </Card>  
    
    :
    <Card className='mt-4 p-3'>
      <h4>Курс "{course.title}" добавлен</h4>
      <span>В ближайшее время к нему станут доступны уроки.</span>
    </Card> 
  )
})

export default LessonCard