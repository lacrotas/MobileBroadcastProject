import CityCard from "../../../custom/cityCard/CityCard.js";
import { useState, useEffect } from "react";
import { fetchCityes } from "../../../http/cityApi.js";

export default function AdminCityGrid({ setAddMeating, nameFilter, countryFilter }) {
    const [cities, setCities] = useState([]);
    useEffect(() => {
        fetchCityes().then(data => setCities(data));
    }, []);
    return (
        <div className="city_grid">
            {cities.map((item, index) => (
                <CityCard isAdmin={true} countryFilter={countryFilter} nameFilter={nameFilter} key={index} item={item} />
            ))}
            <button className="button city_grid_button" onClick={() => setAddMeating(true)}>Добавить сообщество</button>
        </div>
    );
}