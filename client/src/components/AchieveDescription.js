import React from 'react'

const AchieveDescription = ({achieve}) => {
  return (
    <div>
      <div className='mb-1'>
        <h4>Моя работа:</h4>
        <span>{achieve.work}</span>
      </div>
      <div className='mb-1'>
        <h4>Моя роль:</h4>
        <span>{
          Array.isArray(achieve.role)
          ? achieve.role.join(', ')
          : achieve.role
          }</span>
      </div>
      <div className='mb-1'>
        <h4>Индустрия:</h4>
        <span>{achieve.industry}</span>
      </div>
    </div>
  )
}

export default AchieveDescription