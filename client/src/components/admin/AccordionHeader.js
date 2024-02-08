import React from 'react'
import { Accordion } from 'react-bootstrap'
import { SlTrash } from "react-icons/sl";


const AccordionHeader = ({id, remove, number, trash}) => {

  const lessonDelete = (e)=>{
    e.stopPropagation()
    const id = parseInt(e.target.dataset.id)
    remove(id) 
  }

  return (
    <Accordion.Header>
      <div className='d-flex justify-between align-items-center w-100'>
        <span className='align-self-center  w-100'>Урок {number}.</span>
        {trash 
        ? <div  className='pb-1 px-2'>
          <SlTrash data-id={id} onClick={(e) => lessonDelete(e)} />
        </div>
        : '' }
        
      </div>  
    </Accordion.Header>
  )
}

export default AccordionHeader