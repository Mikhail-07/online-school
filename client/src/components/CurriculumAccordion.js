import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const CurriculumAccordion = ({course}) => {
  return ( 
  <Accordion className='rounded-corner mb-5'>   
    {course.lessons.map(lesson =>
    <Accordion.Item key={lesson.number} eventKey={lesson.number}>
      <Accordion.Header>
        <div className='d-flex flex-column'>
          <span>{lesson.number} модуль</span>
          <h3>{lesson.title}</h3>
        </div> 
      </Accordion.Header>
      <Accordion.Body>
        {lesson.description}
      </Accordion.Body>
    </Accordion.Item>)}
  </Accordion>
  )
}


export default CurriculumAccordion