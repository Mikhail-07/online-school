import { BrowserRouter, useLocation } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import React, { useContext, useEffect, useState } from "react";
import './styles/Range.css';
import './styles/App.css';
import { check } from "./http/userAPI";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import SpinnerLoading from "./components/SpinnerLoading";
import NavBarCanva from "./components/NavBarCanva";
import { COACHING_ROUTE } from "./utils/consts";
import Footer from "./components/Footer";

const App = observer(() => {

  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      check().then(data => {
        user.setUser(data)
        user.setAuth(true)
      }).finally(() => setLoading(false))
  }, [user])

  if (loading) {
    return <SpinnerLoading />
  }


  return (
    <BrowserRouter>
      <NavBarCanva />
      <AppRouter />
    </BrowserRouter>
  );
}
)
export default App;
