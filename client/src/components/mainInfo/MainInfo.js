import "./MainInfo.scss";
import Map from "../map/Map";
import { NavLink } from "react-router-dom";
import { CITY_ROUTE } from "../../pages/appRouter/Const";
import { useState } from "react";
import ModalWindow from "../../custom/modalWindow/ModalWindow";

function MainInfo() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  return (
    <section className="main_info">
      <div className="main_info_container">
        <h2 className="container_label h2_text">Mobile Broadcast</h2>
        <p className="container_paragraph paragraph_text">
          Это международное сообщество для всех, кто увлечен мобильной разработкой. Это место, где границы между платформами стираются, и единственное, что имеет значение – ваш интерес и страсть к мобильным технологиям.
        </p>
        <NavLink to={CITY_ROUTE}>
          <button className="container_button button">
            Вступить в сообщество
          </button>
        </NavLink>
      </div>
      <div className="main_info_map" onClick={() => setIsMapOpen(!isMapOpen)}>
        <Map svgClass="map_svg" />
      </div>
      {isMapOpen &&
        < ModalWindow type="map" closeModal={setIsMapOpen} svgClass="modal_map_svg" />
      }
    </section>
  );
}

export default MainInfo;
