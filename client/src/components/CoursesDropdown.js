import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react'
import { observer } from 'mobx-react-lite';

const CoursesDropdown = observer(({courses, selectCourse}) => {
  return (
    <Dropdown className='mt-4'>
      <Dropdown.Toggle 
        variant="warning"
        value={selectCourse.title}
      >
        Мои курсы
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {courses.map(course =>
          <Dropdown.Item onClick={()=>selectCourse(course.id)} key={course.id} >{course.title}</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  )
})

export default CoursesDropdown
