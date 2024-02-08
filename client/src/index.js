import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import CourseStore from './store/CourseStore';
import AdminStore from './store/AdminStore';
import AchieveStore from './store/AchieveStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={
    {
      user: new UserStore(),
      course: new CourseStore(),
      admin: new AdminStore(),
      achieve: new AchieveStore()
    }
  }>
    <App />
  </Context.Provider>
);
