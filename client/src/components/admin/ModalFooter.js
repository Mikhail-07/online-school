import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalFooter = ({close, action}) => {

  const submit = () => {
    action()
    if (close) close()
  }

  return (
    <Modal.Footer>
      <Button variant="secondary" onClick={close}>
        Закрыть
      </Button>
      <Button variant="primary" onClick={submit}>
        Создать
      </Button>
    </Modal.Footer>
  )
}

export default ModalFooter