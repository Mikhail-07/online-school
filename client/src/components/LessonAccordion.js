import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Player from './Player';

const LessonAccordion = ({lessons}) => {
  return (
    lessons.map((lesson, idx) => 
      <Accordion key={lesson.id} className='mb-3'>   
        <Accordion.Item eventKey={0}>
          <Accordion.Header>
            <span className='header-index'>{idx+1}</span>
            <div>{lesson.title}</div> 
          </Accordion.Header>
          <Accordion.Body>
            <div className='mb-3'>
              {lesson.content}
            </div>
            {
              lesson.audio
              ?
              <div>
                <h6>Аудиоурок</h6>
                <Player audio={process.env.REACT_APP_API_URL + '/audio' + lesson.audio}/>
              </div>
              : ''
            }
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>)
  )
}

export default LessonAccordion