import React, { cloneElement, useState } from 'react';
import { Modal } from 'react-bootstrap'

const ModalWindow = ({ id, children}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      { cloneElement( children[0], { onClick: handleShow } ) }
      <Modal show={show} onHide={handleClose}>
        {cloneElement(children[1], {id: id, handleClose})} 
      </Modal>
    </>
  )
}

export default ModalWindow