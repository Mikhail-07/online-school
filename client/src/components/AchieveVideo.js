import React from 'react'

const AchieveVideo = ({video}) => {
  return (
    <div className='video'>
      <video className='w-100 h-100' muted autoPlay crossOrigin="anonymous" loop="loop">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}

export default AchieveVideo