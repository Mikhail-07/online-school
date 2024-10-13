import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card'
import { Button, Form } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SCHOOL_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { Context } from '../index';

function Auth () {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE
  const navigate = useNavigate()

  const { user } = useContext(Context)

  const [value, setValue] = useState(
    {
      email:'',
      password:'',
      name:'',
      surname:''
    }
  )

  const click = async () => {
    try {
      let data;
      if (isLogin) {
          data = await login(value);
      } else {
          data = await registration(value);
      }
      user.setUser(data)
      user.setAuth(true)
      navigate(SCHOOL_ROUTE);
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <Container className='d-flex justify-content-center align-items-center full-height'>
      <Card className='p-3'>
        <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className='d-flex flex-column'>

          {isLogin

          ?
          <div>
            <Form.Control value={value.email} onChange={e => setValue({...value, email: e.target.value})} className='mt-2' placeholder="Введите email"></Form.Control>
            <Form.Control value={value.password} onChange={e => setValue({...value, password: e.target.value})} type="password" className='mt-2' placeholder="Введите пароль"></Form.Control>
          </div>
        
          :
          <div>
            <Form.Control value={value.email} onChange={e => setValue({...value, email: e.target.value})} className='mt-2' placeholder="Введите email"></Form.Control>
            <Form.Control value={value.password} onChange={e => setValue({...value, password: e.target.value})} type='password' className='mt-2' placeholder="Введите пароль"></Form.Control>
            <Form.Control value={value.name} onChange={e => setValue({...value, name: e.target.value})} className='mt-2' placeholder="Имя"></Form.Control>
            <Form.Control value={value.surname} onChange={e => setValue({...value, surname: e.target.value})} className='mt-2' placeholder="Фамилия"></Form.Control>
          </div>}

          <div className='d-flex justify-content-between align-items-center mt-3'>
            
            <div className='d-inline pl-0'>
              {isLogin 
              ? <span>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink></span>
              : <span>Уже есть аккаунт? <NavLink href={LOGIN_ROUTE}>Войти</NavLink></span>
              }
            </div>
            
            <Button onClick={click} variant={'outline-success'}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</Button>
          </div>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth
