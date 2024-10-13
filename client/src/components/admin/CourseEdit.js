import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import AccordionLessons from './AccordionLessons';
import { Modal } from 'react-bootstrap';
import ModalFooter from './ModalFooter';
import { editCourse, fetchLessons } from '../../http/coursesAPI';
import { Context } from '../../index';

let newId = 0

const CourseEdit = ({id, handleClose}) => {
  const courseStore = useContext(Context).course
  courseStore.setCourse(id)
  

  const lesson = {
    id: 0,
    title: '',
    description: '',
    content: '',
    audio: ''
  }

  const [course, setCourse] = useState(courseStore.course)
  const [lessons, setLessons] = useState(courseStore.lessons)
  
  useEffect(() => {
    fetchLessons(id).then(data => {
      courseStore.setLessons(data)
      setLessons(data)
      if (lessons.length > 0 && lessons){
        newId = data.reduce((acc, curr) => acc.id > curr.id ? acc.id : curr.id)
      }
    })
  }, [])

  const edit = () => {
    const formData = new FormData()
    for ( const key in course){
      formData.append(key, course[key])
    }

    lessons.forEach((lesson, idx) => {
      lesson.number = idx + 1
      formData.append(`lesson_${lesson.number}`, lesson.audio)
      delete lesson.audio
    });

    formData.append('lessons', JSON.stringify(lessons))

    const b = Object.fromEntries(formData.entries())
    console.log(b)

    editCourse(formData).then(data => {
      console.log(data)
    })
  }

  const addLesson = () => {
    newId = newId + 1
    setLessons([...lessons, {...lesson, id: newId}])
  }

  const removeLesson = (id) => {
    setLessons(lessons.filter(lesson => lesson.id!==id))
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Создание курса</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <FloatingLabel controlId="floatingInput" label="Название курса" className="mb-3">
            <Form.Control required value={course.title} onChange={e => setCourse({...course, title: e.target.value})} type="text" placeholder="Название курса"/>
          </FloatingLabel>

          <FloatingLabel 
            label="Краткое описание курса для страницы"
            className="mb-3"
          >
            <Form.Control
            required
            value={course.subTitle} onChange={e => setCourse({...course, subTitle: e.target.value})}
            as="textarea"
            placeholder="Краткое описание курса для страницы"
            style={{ height: '80px' }}
            />
          </FloatingLabel>

          <FloatingLabel 
            label="Краткое описание курса для витрины"
            className="mb-3"
          >
            <Form.Control
            required
            value={course.description} 
            onChange={e => setCourse({...course, description: e.target.value})}
            as="textarea"
            placeholder="Краткое описание курса для витрины"
            style={{ height: '150px' }}
            />
          </FloatingLabel>

          <Form.Group controlId="formFile" className="my-3">
            <Form.Label>
              <h6>
              Обложка курса:
              </h6>
            </Form.Label>
            <Form.Control 
            required
            onChange={e => setCourse({...course, img: e.target.files[0]})}
            type="file" />
          </Form.Group>

          <FloatingLabel controlId="floatingInput" label="Cтоимость" className="mb-3">
            <Form.Control required value={course.price} onChange={e => setCourse({...course, price: e.target.value})} type="number" placeholder="Cтоимость"/>
          </FloatingLabel>

          <AccordionLessons lessons={lessons} add={addLesson} remove={removeLesson} course={course} setLessons={setLessons}/>
        </Form>
      </Modal.Body>

      <ModalFooter close={handleClose} action={edit}/>
      
    </>
  )
}

export default CourseEdit