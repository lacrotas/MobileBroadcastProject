import "./Map.scss";
import { useState, useEffect, useMemo } from "react";
import { MAP_PATH } from "./mapPath";
import { fetchAllCityByContry, fetchCountries } from "../../http/cityApi";
import CityCard from "../../custom/cityCard/CityCard";
function Map({ svgClass }) {
  /* for scale map */
  const [scale, setScale] = useState(1);
  const scaledStyle = useMemo(() => {
    return { transform: `scale(${scale})` };
  }, [scale]);


  const [isModal, setIsModal] = useState(svgClass === "map_svg" ? 0 : 1);
  const [currentCity, setCurrentCity] = useState();
  const [allCity, setAllCity] = useState();
  /*all country */
  const [allCountry, setAllCountry] = useState([]);
  useEffect(() => {
    fetchCountries().then(data => setAllCountry(data));
  }, []);

  function checkCountryOnStyle(index) {
    for (let i = 0; i < allCountry.length; i++) {
      if (index === allCountry[i].countryIndex) {
        return [allCountry[i].bgColor, allCountry[i].strokeColor];
      }
    }
    return false;
  }
  function setCurrentCountry(index) {
    for (let i = 0; i < allCountry.length; i++) {
      if (index === allCountry[i].countryIndex) {
        setCurrentCity(allCountry[i]);
        fetchAllCityByContry(allCountry[i].id).then(data => setAllCity(data));
      }
    }
  }
  return (
    <div className={svgClass}>

      {(!isModal) ?
        <svg width="677" height="364" viewBox="0 0 800 309" fill="none" xmlns="http://www.w3.org/2000/svg">
          {MAP_PATH.map((item, index) => (
            <path d={item} key={index} fill={checkCountryOnStyle(index) ? checkCountryOnStyle(index)[0] : "#B3A8A8"} />
          ))}
        </svg>
        :
        <>
          <div className="maps_button_container">
            <div className="maps_button_container_paragraph" onClick={() => setScale((prev) => prev + 0.1)}>
              <p>+</p>
            </div>
            <div className="maps_button_container_paragraph" onClick={() => setScale((prev) => prev - 0.1)}>
              <p>–</p>
            </div>
            <div className="maps_button_container_paragraph" onClick={() => setScale(1)}>
              <p>1:1</p>
            </div>
          </div>
          <svg style={scaledStyle} width="677" height="364" viewBox="0 0 800 309" fill="none" xmlns="http://www.w3.org/2000/svg">
            {MAP_PATH.map((item, index) => (
              <path d={item} key={index} fill={checkCountryOnStyle(index) ? checkCountryOnStyle(index)[0] : "#B3A8A8"} onClick={() => setCurrentCountry(index)} />
            ))}
          </svg>
        </>
      }
      {
        allCity ?
          <div className="modal_window_cityes_in_country">
            <h3 className="h2_text">{currentCity.name}</h3>
            <div className="city_grid">
              {allCity.map((item, index) => (
                <CityCard key={index} item={item} />
              ))}
            </div>
          </div>
          : <></>
      }
    </div >
  );
}

export default Map;