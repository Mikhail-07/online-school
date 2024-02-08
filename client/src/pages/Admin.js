import React, { useContext, useEffect, useState } from 'react'
import { Container, Button, Spinner } from 'react-bootstrap';
import ModalWindow from '../components/admin/ModalWindow';
import SortableTable from '../components/admin/SortableTable';
import { Context } from '../index';
import usersHeaderConfig from '../components/admin/usersHeaderConfig'
import groupHeaderConfig from '../components/admin/groupHeaderConfig'
import courseHeaderConfig from '../components/admin/courseHeaderConfig'
import { fetchUsers, fetchGroups } from '../http/adminAPI';
import { fetchCourses } from '../http/coursesAPI';
import { observer } from 'mobx-react-lite';
import GroupForm from '../components/admin/GroupForm';
import GroupEdit from '../components/admin/GroupEdit';
import CourseEdit from '../components/admin/CourseEdit';
import CourseForm from '../components/CourseForm';
import AchieveForm from '../components/admin/AchieveForm';
import SpinnerLoading from '../components/SpinnerLoading';

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
            Мои заслуги
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