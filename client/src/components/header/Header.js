import { useContext, useState } from "react";
import Logo from "../../assets/images/header_logo.svg";
import "./Header.scss";
import { Context } from "../../index";
import { NavLink } from "react-router-dom";
import { MEATING_ROUTE, EXPERT_ROUTE, CITY_ROUTE, MAIN_ROUTE, ADMIN_MAIN_ROUTE } from '../../pages/appRouter/Const';
import { useLocation } from 'react-router-dom';
import BurgerImage from "../../assets/images/burger.svg";

function Header({ setOpenModal }) {
  const { user } = useContext(Context)

  const location = useLocation();
  const [navigate, setNavigate] = useState(checkPage());
  const [burgerOpen, setBurgerOpen] = useState(false);

  function checkPage() {
    switch (location.pathname) {
      case MAIN_ROUTE:
        return 1;
      case CITY_ROUTE:
        return 2;
      case EXPERT_ROUTE:
        return 3;
      case MEATING_ROUTE:
        return 4;
      case ADMIN_MAIN_ROUTE:
        return 5;
      default:
        return 1;
    }
  }

  function handleLogOut() {
    user.setIsAuth(false);
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <header className="header">
      <img className="header_logo" src={Logo} alt="logo" />
      <>
        <div className="header_container">
          {user.isAuth ?
            <nav className="container_navigation">
              <NavLink to={MAIN_ROUTE}>
                <p className="navigation_item" style={{ fontWeight: (navigate === 1) ? 'bold' : 'normal' }}
                  onClick={() => setNavigate(1)}>Главная</p>
              </NavLink>
              <NavLink to={CITY_ROUTE}>
                <p className="navigation_item" style={{ fontWeight: (navigate === 2) ? 'bold' : 'normal' }}
                  onClick={() => setNavigate(2)}>Сообщество</p>
              </NavLink>
              <NavLink to={EXPERT_ROUTE}>
                <p className="navigation_item" style={{ fontWeight: (navigate === 3) ? 'bold' : 'normal' }}
                  onClick={() => setNavigate(3)}>Эксперты</p>
              </NavLink>
              {/* <NavLink to={MEATING_ROUTE}>
                <p className="navigation_item" style={{ fontWeight: (navigate === 4) ? 'bold' : 'normal' }}
                  onClick={() => setNavigate(4)}>Встречи</p>
              </NavLink> */}
              <NavLink to={ADMIN_MAIN_ROUTE}>
                <p className="navigation_item" style={{ fontWeight: (navigate === 5) ? 'bold' : 'normal' }}
                  onClick={() => setNavigate(5)}>Заявления</p>
              </NavLink>
            </nav>
            :
            <nav className="container_navigation">
              <NavLink to={MAIN_ROUTE}>
                <p className="navigation_item" style={{ fontWeight: (navigate === 1) ? 'bold' : 'normal' }}
                  onClick={() => setNavigate(1)}>Главная</p>
              </NavLink>

              <NavLink to={CITY_ROUTE}>
                <p className="navigation_item" style={{ fontWeight: (navigate === 2) ? 'bold' : 'normal' }}
                  onClick={() => setNavigate(2)}>Сообщество</p>
              </NavLink>

              <NavLink to={EXPERT_ROUTE}>
                <p className="navigation_item" style={{ fontWeight: (navigate === 3) ? 'bold' : 'normal' }}
                  onClick={() => setNavigate(3)}>Эксперты</p>
              </NavLink>

              {/* <NavLink to={MEATING_ROUTE}>
                <p className="navigation_item" style={{ fontWeight: (navigate === 4) ? 'bold' : 'normal' }}
                  onClick={() => setNavigate(4)}>Встречи</p>
              </NavLink> */}
            </nav>}
          {user.isAuth &&
            <button className="header_button button" onClick={() => handleLogOut()}>Выйти</button>
            // <button className="header_button button" onClick={() => setOpenModal(true)}>Войти</button>
          }
        </div>
        <div className="header_container-small">
          <img src={BurgerImage} alt="burger logo" onClick={() => setBurgerOpen(!burgerOpen)} />
          <div className="burger_container" style={burgerOpen ? { right: "0px" } : { right: "-300px" }}>
            {
              user.isAuth ?
                <nav className="container_navigation">
                  <NavLink to={MAIN_ROUTE} onClick={() => setBurgerOpen(!burgerOpen)}>
                    <p className="navigation_item" style={{ fontWeight: (navigate === 1) ? 'bold' : 'normal' }}
                      onClick={() => setNavigate(1)}>Главная</p>
                  </NavLink>
                  <NavLink to={CITY_ROUTE} onClick={() => setBurgerOpen(!burgerOpen)}>
                    <p className="navigation_item" style={{ fontWeight: (navigate === 2) ? 'bold' : 'normal' }}
                      onClick={() => setNavigate(2)}>Сообщество</p>
                  </NavLink>
                  <NavLink to={EXPERT_ROUTE} onClick={() => setBurgerOpen(!burgerOpen)}>
                    <p className="navigation_item" style={{ fontWeight: (navigate === 3) ? 'bold' : 'normal' }}
                      onClick={() => setNavigate(3)}>Эксперты</p>
                  </NavLink>
                  {/* <NavLink to={MEATING_ROUTE} onClick={()=>setBurgerOpen(!burgerOpen)}>
                    <p className="navigation_item" style={{ fontWeight: (navigate === 4) ? 'bold' : 'normal' }}
                      onClick={() => setNavigate(4)}>Встречи</p>
                  </NavLink> */}
                  <NavLink to={ADMIN_MAIN_ROUTE} onClick={() => setBurgerOpen(!burgerOpen)}>
                    <p className="navigation_item" style={{ fontWeight: (navigate === 5) ? 'bold' : 'normal' }}
                      onClick={() => setNavigate(5)}>Заявления</p>
                  </NavLink>
                </nav>
                :
                <nav className="container_navigation">
                  <NavLink to={MAIN_ROUTE} onClick={() => setBurgerOpen(!burgerOpen)}>
                    <p className="navigation_item" style={{ fontWeight: (navigate === 1) ? 'bold' : 'normal' }}
                      onClick={() => setNavigate(1)}>Главная</p>
                  </NavLink>

                  <NavLink to={CITY_ROUTE} onClick={() => setBurgerOpen(!burgerOpen)}>
                    <p className="navigation_item" style={{ fontWeight: (navigate === 2) ? 'bold' : 'normal' }}
                      onClick={() => setNavigate(2)}>Сообщество</p>
                  </NavLink>

                  <NavLink to={EXPERT_ROUTE} onClick={() => setBurgerOpen(!burgerOpen)}>
                    <p className="navigation_item" style={{ fontWeight: (navigate === 3) ? 'bold' : 'normal' }}
                      onClick={() => setNavigate(3)}>Эксперты</p>
                  </NavLink>

                  {/* <NavLink to={MEATING_ROUTE} onClick={()=>setBurgerOpen(!burgerOpen)}>
                    <p className="navigation_item" style={{ fontWeight: (navigate === 4) ? 'bold' : 'normal' }}
                      onClick={() => setNavigate(4)}>Встречи</p>
                  </NavLink> */}
                </nav>
            }
            {user.isAuth &&
              <button className="header_button button" onClick={() => handleLogOut()}>Выйти</button>
            }
            {/* {user.isAuth ?
              <button className="header_button button" onClick={() => handleLogOut()}>Выйти</button>
              :
              <button className="header_button button" onClick={() => setOpenModal(true)}>Войти</button>
            } */}
          </div>
        </div>
      </>
    </header>
  );
}

export default Header;
