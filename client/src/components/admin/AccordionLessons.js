import React, { useContext } from 'react'
import { Accordion, Button } from 'react-bootstrap'
import AccordionBody from './AcordionBody'
import AccordionHeader from './AccordionHeader'
import { Context } from '../../index'

const AccordionLessons = ({lessons, add, remove, setLessons}) => {
  const {course} = useContext(Context)

  let trash = false
  
  const onChange = (id, item, value) =>{
    const idx = lessons.findIndex(lesson => lesson.id === id)
    lessons[idx][item] = value
    setLessons([...lessons])
  }

  return (
    <div className='my-3'>
      <h6>Содержание уроков</h6>
      {lessons.map((lesson, index) =>{
        const player = course.lessons.find(item => item.id === lesson.id && item.audio)
        trash = lessons.length>1
        // ? trash=true
        // : trash=false
        return <Accordion className='mb-3' id={lesson.id} key={lesson.id}>  
          <Accordion.Item eventKey="0">
            <AccordionHeader id={lesson.id} remove={remove} trash={trash} number={index+1}/>
            <AccordionBody id={lesson.id} lesson={lesson} setLessons={setLessons} onChange={onChange} player={player}/>
          </Accordion.Item>
        </Accordion>
      })}
        
      <Button variant="outline-primary" className='w-100' onClick={add}>Добавить урок</Button>
    </div>
  )
}

export default AccordionLessons