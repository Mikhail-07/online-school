import React, { cloneElement, useContext, useEffect, useState } from 'react';
import { Button, Modal, Form, Card } from 'react-bootstrap'
import { createGroup } from '../../http/adminAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import GroupForm from './GroupForm';


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