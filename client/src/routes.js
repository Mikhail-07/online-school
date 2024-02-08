import Admin from './pages/Admin'
import Profile from './pages/Profile'
import Auth from './pages/Auth'
import CoursesPage from './pages/CoursesPage'
import CoursePage from './pages/CoursePage'
import School from './pages/School'
import Coaching from './pages/Сoaching'
import { ACHIEVEMENT_ROUTE, ADMIN_ROUTE, COACHING_ROUTE, COURSES_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SCHOOL_ROUTE } from './utils/consts';
import Achievement from './pages/Achievement'

export const authRoutes = [
  {
    path: PROFILE_ROUTE,
    Component: Profile
  }
];

export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: SCHOOL_ROUTE,
    Component: School
  },
  {
    path: COURSES_ROUTE,
    Component: CoursesPage
  },
  {
    path: COACHING_ROUTE,
    Component: Coaching
  },
  {
    path: ACHIEVEMENT_ROUTE,
    Component: Achievement
  },
  {
    path: COURSES_ROUTE + '/:id',
    Component: CoursePage
  },
]