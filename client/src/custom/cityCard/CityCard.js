import "./CityCard.scss";
import { NavLink } from "react-router-dom";
import { CITY_ROUTE, CITY_ADMIN_ROUTE } from "../../pages/appRouter/Const";

function CityCard({ isAdmin, item, countryFilter, nameFilter }) {
    function checkName() {
        if (nameFilter && nameFilter !== "") {
            if (item.name.toLowerCase().includes(nameFilter.toLowerCase())) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
    return (
        <>
            {((!countryFilter || countryFilter.id === item.countryId) && checkName()) ?
                < NavLink to={isAdmin ? CITY_ADMIN_ROUTE + "/" + item.id : CITY_ROUTE + "/" + item.id}>
                    <section className="card">
                        <img className="card_image" src={process.env.REACT_APP_API_URL + item.image} alt="city logo" />
                        <div className="card_container-hover">
                            <button className="card_button button">Подробней</button>
                        </div>
                    </section>
                </NavLink >
                : <></>
            }
        </ >
    );
}
export default CityCard;