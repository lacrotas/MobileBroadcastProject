import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import React, { useContext, useState, useEffect } from "react";
import AppRouter from './pages/appRouter/AppRouter';
import ModalWindow from "./custom/modalWindow/ModalWindow";
import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
// import { check } from "./http/userApi";

const App = observer(() => {
  const [openModel, setOpenModal] = useState(false);

  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      // check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      // }).finally(() => setLoading(false))
    }
  }, [])

  return (
    <div className="app">
      <div className="app_content">
        <BrowserRouter>
          <Header setOpenModal={setOpenModal} />
          <AppRouter />
        </BrowserRouter>
        {openModel && <ModalWindow type={"auth"} closeModal={setOpenModal} />}
      </div>
      <Footer />
    </div>
  );
});

export default App;
