import CityFilterInfo from "./components/cityFilterInfo/CityFilterInfo.js";
import CityGrid from "./components/cityGrid/CityGrid.js"
import CityCard from "../../../custom/cityCard/CityCard.js";
import { Context } from "../../../index.js";
import { fetchCityes } from "../../../http/cityApi.js";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";

const CityChoosePage = observer(() => {
    const [cities, setCities] = useState();
    useEffect(() => {
        fetchCityes().then(data => setCities(data));
    }, []);
    const [country, setCountry] = useState();
    const [cityName, setCityName] = useState();
    return (
        <div className="city_choose_page">
            <CityFilterInfo setCountry={setCountry} setCityName={setCityName} />
            {cities ?
                <div className="city_grid">
                    {cities.map((item, index) => (
                        <CityCard key={index} item={item} countryFilter={country} nameFilter={cityName} />
                    ))}
                </div>
                :
                <></>
            }
        </div>
    );
})

export default CityChoosePage;
