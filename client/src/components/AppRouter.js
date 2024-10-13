import {Routes, Navigate, Route} from 'react-router-dom'
import {adminRoutes, authRoutes, publicRoutes} from '../routes'
import React, { useContext } from 'react'
import { SCHOOL_ROUTE } from '../utils/consts';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {  
  const {user} = useContext(Context)

  console.log(user)
  return (
      <Routes>
        {user.isAuth && authRoutes.map(({path, Component}) => 
          <Route key={path} path={path} element={<Component />} exact />)}
        {user.user?.role === 'ADMIN' && adminRoutes.map(({path, Component}) =>
          <Route key={path} path={path} element={<Component />} exact />)}
        {publicRoutes.map(({path, Component}) => 
          <Route key={path} path={path} element={<Component />} exact />)}
        <Route path="*" element={<Navigate to={SCHOOL_ROUTE} />} />
      </Routes>
  )
})

export default AppRouter