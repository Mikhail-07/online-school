import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ADMIN_ROUTE, COACHING_ROUTE, COURSES_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, SCHOOL_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Context } from '../index';


const NavBarCanva = observer(() => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const handleClose = () => setMenuOpen(false)

  const {user} = useContext(Context)
  const navigate = useNavigate()
  const logOut = () => {
    user.setUser({})
    user.setAuth(false)
    localStorage.removeItem('token')
  }
  return (
    <>
      <Navbar collapseOnSelect expand='md' className="bg-body-tertiary position-relative z-3">
        <Container fluid>
          <Navbar.Brand className='heading-color heading-font' onClick={() => navigate(SCHOOL_ROUTE)}> 
            <h1>Твоя школа</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} onClick={toggleMenu}/>
          <Navbar.Offcanvas
            className='bg-color text-uppercase'
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
            show={menuOpen}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`} onClick={() => navigate(SCHOOL_ROUTE)}>
                <h1 className='heading-color heading-font'>Твоя школа</h1>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='d-flex align-items-end heading-font' onClick={handleClose}>
              {user.isAuth
              ? 
              <Nav className='nav_font-size'>
                <Nav.Link onClick={() => navigate(COURSES_ROUTE)}>Курсы</Nav.Link>
                <Nav.Link onClick={() => navigate(COACHING_ROUTE)}>Коучинг</Nav.Link>
                {/* <Nav.Link href="#link">Персональные тренировки</Nav.Link> */}
                <Nav.Link onClick={() => navigate(PROFILE_ROUTE)}>Мой кабинет</Nav.Link>
                {user.user.role==='ADMIN' ? <Nav.Link onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Nav.Link> : ''}
                <Nav.Link href={SCHOOL_ROUTE} onClick={() => logOut()}>Выйти</Nav.Link>
              </Nav>
              :
              <Nav className='nav_font-size'>
                <Nav.Link onClick={() => navigate(COURSES_ROUTE)}>Курсы</Nav.Link>
                <Nav.Link onClick={() => navigate(COACHING_ROUTE)}>Коучинг</Nav.Link>
                {/* <Nav.Link href="#link">Персональные тренировки</Nav.Link> */}
                <Nav.Link onClick={() => navigate(LOGIN_ROUTE)}>Войти</Nav.Link>
              </Nav>}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
})

export default NavBarCanva