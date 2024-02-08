import React from 'react'

const PhraseDivider = ({header, stroke}) => {
  return (
    <div className='text-uppercase heading-font  f-450 d-flex flex-wrap'>
      {header.split(' ').map((word, idx) =>
        <div className={stroke.includes(idx+1) ? 'stroke pe-4 d-flex' : 'd-flex pe-4'}>
          {word.split('').map(letter => <div>{letter}</div>)}
        </div>
      )}
    </div>
  )
}

export default PhraseDivider