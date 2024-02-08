import React  from 'react'
import {Accordion, Form} from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Player from '../Player';

const AccordionBody = ({id, lesson, onChange, player}) => {

  return (
    <Accordion.Body>

      <FloatingLabel
        controlId="floatingInput"
        label="Название урока"
        className="mb-3"
      >
        <Form.Control required value={lesson.title} onChange={e => onChange(id, 'title', e.target.value)} type="text" placeholder="Название урока"/>
      </FloatingLabel>

      <FloatingLabel 
        controlId="floatingTextarea2"
        label="Краткое описание для страницы курса"
        className="mb-3"
      >
        <Form.Control
        required
        value={lesson.description}
        onChange={e => onChange(id, 'description', e.target.value)}
        as="textarea"
        placeholder="Краткое описание для страницы курса"
        style={{ height: '150px' }}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea2" label="Содержание урока">
      <Form.Control
        required
        value={lesson.content}
        onChange={e => onChange(id, 'content', e.target.value)}
        as="textarea"
        placeholder="Содержание урока"
        style={{ height: '150px' }}
      />
      </FloatingLabel>
      <Form.Group controlId="formFile" className="my-3">
        <Form.Label>Материалы курса:</Form.Label>
        {
          player 

          ?
          <div className='mb-4'>
            <h6>Аудиоурок</h6>
            <Player audio={process.env.REACT_APP_API_URL + lesson.audio}/>
          </div>
          
          :
          ''
        }
        <Form.Control 
        required
        onChange={e => onChange(id, 'audio', e.target.files[0])}
        type="file" />
      </Form.Group>
    </Accordion.Body>
  )
}

export default AccordionBody