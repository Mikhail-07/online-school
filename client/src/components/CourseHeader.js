import React from 'react'
import { Row } from 'react-bootstrap'

const CourseHeader = ({title, description}) => {

  return (
    <div>
    <Row className='mb-2'>
      <h2>{title}</h2>
    </Row>
    <Row>
      <div>
        <p>
          {description}
        </p>
      </div>
    </Row>
  </div>
  )
}

export default CourseHeader