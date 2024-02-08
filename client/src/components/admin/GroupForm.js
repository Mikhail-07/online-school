import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../index'
import { Modal, Form, Card, Button } from 'react-bootstrap'
import { createGroup, fetchGroups, fetchUsers } from '../../http/adminAPI'
import ModalFooter from './ModalFooter'
import { assignGroup } from './assignGroup'

const GroupForm = observer (({handleClose}) => {
  const {admin, course} = useContext(Context)

  const [students, setStudents] = useState([])
  const [lessons, setLessons] = useState([])
  const [courseId, setCourseId] = useState(0)
  const group = {courseId, students, lessons}

  useEffect(() =>{
    admin.setFilteredUsers(courseId)
    course.setCourse(courseId)
  }, [courseId])

  const create = () => {
    if (students.length === 0) return alert("Нет выбранных ученников")
    try{
      const formData = new FormData()
      formData.append('courseId', group.courseId)
      formData.append('students', JSON.stringify(group.students))
      formData.append('lessons', JSON.stringify(group.lessons))
      createGroup(formData)
        .then(() => fetchGroups().then(data => admin.setGroups(data)))
        .then(() => fetchUsers().then(data => admin.setUsers(data)))
  
    } catch(e) {
      alert(e.response.data.message)
    }
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Создание потока</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Select 
          value={courseId}
          className='mb-4'
          onChange={e => setCourseId(parseInt(e.target.value))}
        >
          <option disabled defaultValue value={0}>Выбери курс</option>
          {course.courses.map((course) =>
            course.price > 0
            ? <option key={course.id} value={course.id}>{course.title}</option>
            : ''
          )}
        </Form.Select>
      

      <div className='mb-2'>
        <h6>Незакрепленные ученики</h6>
        <span>Список зарегестрированных учеников</span>
      </div>
      
      {admin.filteredUsers.length>0

      ?
      <div>
        <Card className='p-2 mb-4'>         
          <div className='d-flex flex-wrap'>
          {admin.filteredUsers?.map( user => 
            <Card key={user.date} className='card__user-name p-3 m-2'>
              <Form.Check // prettier-ignore
                type="checkbox"
                id={user.date}
                label={user.name}
                onClick={() => assignGroup(user.userId, students, setStudents)}
              />
            </Card>
          )}
          </div>
        </Card>
        
        <div>
          <div className='mb-2'>
            <h6>Доступные уроки</h6>
            <span>Список доступных уроков на текущем потоке</span>
          </div>
          <Card className='p-2'>
            {course.course.lessons?.map( lesson => 
              <Card key={lesson.id} className='card__user-name p-3 m-2'>
              <Form.Check // prettier-ignore
                type="checkbox"
                id={lesson.id}
                label={lesson.title}
                onClick={() => assignGroup(lesson.id, lessons, setLessons)}
              />
            </Card>
            )}
          </Card>
        </div>
      </div>
          

      :
      <div>
        <Card className='p-2'>         
          <div className='d-flex flex-wrap'>
            <span className='px-3'>Ничего нет</span>
          </div>
        </Card>
      </div>
      }
      </Modal.Body>

      <ModalFooter close={handleClose} action={create}/>
      
    </>
  )
})

export default GroupForm