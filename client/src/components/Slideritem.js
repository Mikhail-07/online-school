import React from 'react'

const Slideritem = ({item, canva=false}) => {

  const fileExtension = item.file.split('.')[1]

  return (
    <div className={canva ? 'slider-box__canva slider-box d-flex justify-content-center' :'slider-box__page d-flex justify-content-center'}>
      {
      (fileExtension === 'jpg')
      ?
      <img src={process.env.REACT_APP_API_URL + item.file } alt='img' className='h-100 w-100 object-fit-cover'/>
      :
      <video className='w-100 h-100 object-fit-cover' muted autoPlay crossOrigin="anonymous" loop="loop">
        <source src={process.env.REACT_APP_API_URL + item.file } type="video/mp4" />
      </video>
    }
    </div>
  )
}

export default Slideritem