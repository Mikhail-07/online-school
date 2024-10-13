import React, { useContext, useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Context } from '../index';
import { fetchUsers, fetchGroups } from '../http/adminAPI';
import { fetchCourses } from '../http/coursesAPI';
import { observer } from 'mobx-react-lite';
import { ModalWindow, SortableTable, GroupForm, GroupEdit, CourseEdit, AchieveForm, CourseForm, courseHeaderConfig, usersHeaderConfig, groupHeaderConfig } from '../components/admin';
import { SpinnerLoading } from '../components'

const Admin = observer (() => {
  const [loading, setLoading] = useState(true)
  const { course, admin } = useContext(Context)

  useEffect(() => {
    fetchUsers().then(data => {
      admin.setUsers(data)})
    fetchCourses().then(data => {
      course.setCourses(data)})
    fetchGroups().then(data => {
      admin.setGroups(data)})
    .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <SpinnerLoading />
  }

  return (
    <Container>
      <div className='d-flex gap-3 my-4'>

        <ModalWindow>
          <Button variant="warning">
            Добавить курс
          </Button>
          <CourseForm />
        </ModalWindow>
        
        <ModalWindow>
          <Button variant="warning">
            Создать поток
          </Button>
          <GroupForm />
        </ModalWindow>

        <ModalWindow>
          <Button variant="warning">
            Добавить заслуги
          </Button>
          <AchieveForm />
        </ModalWindow>

      </div>
      <div className='d-flex flex-wrap gap-3'>
        <SortableTable name={'Курсы'} arr={course.courses} headerConfig={courseHeaderConfig}>
          <CourseEdit />
        </SortableTable>
        <SortableTable name={'Продажи'} arr={admin.users} headerConfig={usersHeaderConfig} />
        <SortableTable name={'Потоки'} arr={admin.groups} headerConfig={groupHeaderConfig}>
          <GroupEdit />
        </SortableTable>
      </div>
    </Container>
  );
})

export default Admin