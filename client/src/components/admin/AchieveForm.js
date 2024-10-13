import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Modal } from 'react-bootstrap';
import ModalFooter from './ModalFooter';
import { SlTrash } from 'react-icons/sl';
import { createAchive } from '../../http/adminAPI';
import { achieves } from '../../utils/achieveData';

const AchieveForm = ({handleClose}) => {

  const [achieve, setAchieve] = useState({
    brand: '',
    work: '',
    industry: '', 
    category: '',
    roles: [], 
  })

  const [media, setMedia] = useState([])

  const roles = ["Танцор", "Актриса", "Постановщик", "Судья", "Создатель", "Модель"]
  const setRole = (role) => {
    if (achieve.roles.includes(role)){
      const rolesFiltered = achieve.roles.filter(item => item !== role)
      setAchieve({...achieve, roles: rolesFiltered})
    } else {
      setAchieve({...achieve, roles: [...achieve.roles, role]})
    }
  }

  const create = () => {
    const formData = new FormData()
    for ( const key in achieve){
      if (!Array.isArray(achieve.key)){
        formData.append(key, achieve[key])
      }
    }
    formData.append('numberOfFiles', media.length)
    formData.append('roles', JSON.stringify(achieve.roles))
    media.forEach((achieve, idx) => {
      formData.append(`file_${idx}`, achieve)
    });


    const b = Object.fromEntries(formData.entries())
    console.log(b)

    createAchive(formData)
  }

  const createFromArray = () => {
    console.log('click')
    let counter = 0
    for (const achieve of achieves){
      
      counter = counter + 1
      const formData = new FormData()
      for (const key in achieve){
        if (!Array.isArray(achieve.key)){
          formData.append(key, achieve[key])
        }
      }
      formData.append('roles', JSON.stringify(achieve.roles))
      setTimeout(() => {
      console.log('отправляю ' + achieve.brand)
      createAchive(formData)
      }, 500 * (counter));
    }
    console.log('загружено ' + counter + ' строк')
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Новая заслуга</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <FloatingLabel controlId="floatingInput" label="Брэнд" className="mb-3">
            <Form.Control required value={achieve.brand} onChange={e => setAchieve({...achieve, brand: e.target.value})} type="text" placeholder="Название курса"/>
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Что было сделано" className="mb-3">
            <Form.Control required value={achieve.work} onChange={e => setAchieve({...achieve, work: e.target.value})} type="text" placeholder="Название курса"/>
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Индустрия" className="mb-3">
            <Form.Control required value={achieve.industry} onChange={e => setAchieve({...achieve, industry: e.target.value})} type="text" placeholder="Название курса"/>
          </FloatingLabel>

          <Form.Group className='mb-3'>
              <h6>
                Моя роль:
              </h6>
            {roles.map(role =>
              <Form.Check // prettier-ignore
                key={role}
                type='checkbox'
                id={role}
                label={role}
                value={role}
                onChange={e => setRole(e.target.value)}
              />
            )}
          </Form.Group>

          <div className='mb-3'>
              <h6>
                Важность мероприятия:
              </h6>
            <Form.Group className="d-flex gap-2">
              {['А', 'Б', 'В'].map(item =>
                <Form.Check // prettier-ignore
                  key={item}
                  value={item}
                  type='radio'
                  name='group1'
                  id={item}
                  label={item}
                  onChange={e => setAchieve({...achieve, category: e.target.value})}
                />
              )}
            </Form.Group>
          </div>

          {/* Как прикрепить несколько файлов? */}
          <Form.Group controlId="formFile" className="my-3">
            <Form.Label>
              <h6>
              Прикрепленные файлы:
              </h6>
            </Form.Label>
            <div className='d-flex align-items-center'>
                <Form.Control
                  className='mb-2' 
                  required
                  onChange={e => setMedia([e.target.files[0]])}
                  type="file" 
                />
                {
                  media.length>0
                  ? 
                  <div className='pb-2 px-2'>
                    <SlTrash data-id={0} onClick={e => setMedia(media.filter(file => file.name !== e.target.dataset.id))} />
                  </div>
                  : '' 
                }
              </div>
              {media.map((file, idx) => 
              <div className='d-flex align-items-center' key={file.name ? file.name : 'new'}>
                <Form.Control
                  className='mb-2' 
                  required
                  onChange={e => setMedia([...media, e.target.files[0]])}
                  type="file" 
                />
                {
                  media.length>idx+1
                  ? 
                  <div className='pb-2 px-2'>
                    <SlTrash data-id={file.name} onClick={e => setMedia(media.filter(file => file.name !== e.target.dataset.id))} />
                  </div>
                  : '' 
                }
              </div>
               
                )
            }
            
          </Form.Group>

        </Form>
        <button onClick={() => createFromArray()}>
            Загрузить заслуги из массива
        </button>
      </Modal.Body>

      <ModalFooter close={handleClose} action={create}/>
      
    </>
  )
}

export default AchieveForm