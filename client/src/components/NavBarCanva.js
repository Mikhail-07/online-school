import React, { useContext, useEffect, useRef, useState } from 'react';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { SCHOOL_ROUTE, COURSES_ROUTE, COACHING_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, ADMIN_ROUTE } from '../utils/consts';

const NavBarCanva = observer(() => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleClose = () => setMenuOpen(false);
  const logOut = () => {
    user.setUser({});
    user.setAuth(false);
    localStorage.removeItem('token');
  };

  const updateNavbarHeight = () => {
    if (navbarRef.current) {
      const navbarHeight = navbarRef.current.offsetHeight;
      document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
    }
  };

  useEffect(() => {
    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);

    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, [menuOpen]);

  return (
    <Navbar ref={navbarRef} collapseOnSelect expand='md' className="bg-body-tertiary position-relative z-3">
      <Container fluid>
        <Navbar.Brand className='heading-color heading-font' onClick={() => navigate(SCHOOL_ROUTE)}> 
          <h1>Твоя школа</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} onClick={toggleMenu} />
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
            <Nav className='nav_font-size'>
              <Nav.Link onClick={() => navigate(COURSES_ROUTE)}>Курсы</Nav.Link>
              <Nav.Link onClick={() => navigate(COACHING_ROUTE)}>Коучинг</Nav.Link>
              {user.isAuth ? (
                <>
                  <Nav.Link onClick={() => navigate(PROFILE_ROUTE)}>Мой кабинет</Nav.Link>
                  {user.user.role === 'ADMIN' && <Nav.Link onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Nav.Link>}
                  <Nav.Link onClick={logOut}>Выйти</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => navigate(LOGIN_ROUTE)}>Войти</Nav.Link>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
});

export default NavBarCanva;
