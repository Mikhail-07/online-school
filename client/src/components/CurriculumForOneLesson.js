import React from 'react'

const CurriculumForOneLesson = ({course}) => {
  return (
    <div>
        <p>
          {course.lessons[0]?.description}
        </p>
      </div>
  )
}

export default CurriculumForOneLesson