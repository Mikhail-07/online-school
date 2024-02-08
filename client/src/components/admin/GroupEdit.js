import React, { useContext, useState } from 'react'
import { Context } from '../../index'
import { Modal, Form, Card } from 'react-bootstrap'
import ModalFooter from '../admin/ModalFooter'
import { editGroup, fetchGroups, fetchUsers } from '../../http/adminAPI'
import { assignGroup } from './assignGroup'

const GroupEdit = ({id, handleClose}) => {
  const {admin, course} = useContext(Context)
  admin.setGroup(id)
  const courseId = admin.group.courseId
  admin.setFilteredUsers(courseId)
  course.setCourse(courseId)

  
  const currentLessons = []
  const currentStudents = []
  const getCurrent = (arr, curr) => arr.forEach(item => curr.push(item.id))
  getCurrent(admin.group.lessons, currentLessons)
  getCurrent(admin.group.students, currentStudents)


  const [students, setStudents] = useState(currentStudents)
  const [lessons, setLessons] = useState(currentLessons)
  const group = {students, lessons} 


  const edit = () => {
    if (lessons.length<0) return alert('Не выбрано ни одного урока')
    if (students.length<0) return alert('Не выбрано ни одного ученика')
    const formData = new FormData()
    formData.append('courseId', courseId)
    formData.append('groupId', id)
    formData.append('students', JSON.stringify(group.students))
    formData.append('lessons', JSON.stringify(group.lessons))
    editGroup(formData)
      .then(() => fetchGroups().then(data => admin.setGroups(data)))
      .then(() => fetchUsers().then(data => admin.setUsers(data)))
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Создание потока</Modal.Title>
      </Modal.Header>

      <Modal.Body>

      <div className='mb-2'>
        <h6>Закрепленные ученики</h6>
        <span>Список зарегестрированных учеников</span>
      </div>
      
      <div>
        <Card className='p-2 mb-4'>         
          <div className='d-flex flex-wrap'>
          {admin.group.students.map( student => 
            <Card key={'s' + student.id} className='card__user-name p-3 m-2'>
              <Form.Check // prettier-ignore
                type="checkbox"
                checked={students.includes(student.id)}
                id={'s' + student.id}
                label={student.name}
                onChange={() => assignGroup(student.id, students, setStudents)}
              />
            </Card>
          )}
          {admin.filteredUsers?.map( student => 
            <Card key={'s' + student.userId} className='card__user-name p-3 m-2'>
              <Form.Check // prettier-ignore
                type="checkbox"
                id={'s' + student.userId}
                label={student.name}
                onChange={() => assignGroup(student.userId, students, setStudents)}
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
              <Card key={'l' + lesson.id} className='card__user-name p-3 m-2'>
              <Form.Check // prettier-ignore
                checked={lessons.includes(lesson.id)}
                type="checkbox"
                id={'l' + lesson.id}
                label={lesson.title}
                onChange={() => assignGroup(lesson.id, lessons, setLessons)}
              />
            </Card>
            )}
          </Card>
        </div>
      </div>
      </Modal.Body>

      <ModalFooter close={handleClose} action={edit}/>
    </>
  )
}

export default GroupEdit