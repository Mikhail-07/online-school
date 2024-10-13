import { cloneElement, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {AchieveCarousel, AchieveDescription} from './index'
import { observer } from 'mobx-react-lite';
import { Col } from 'react-bootstrap';

const AchieveCanva = observer(({achieve, children, canva}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      { cloneElement( children, { onClick: handleShow } ) }

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{achieve.brand}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            achieve.files.length>0 
            ?
            <Col className='position-relative mb-5'>
              <AchieveCarousel files={achieve.files} canva/>
            </Col> 
            : ''
          }
          <Col>
            <AchieveDescription achieve={achieve}/>
          </Col>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
})

export default AchieveCanva