import "./ExpertCard.scss";
import LocationImage from "../../assets/images/location.svg";
import { NavLink } from "react-router-dom";
import { EXPERT_ROUTE, EXPERT_ADMIN_ROUTE } from "../../pages/appRouter/Const";
import { fetchOneCity } from "../../http/cityApi";
import { useState, useEffect } from "react";

function ExpertCard({ isAdmin, id, name, image, technologies, cityId, cityFilter, tehnologyFilter, nameFilter, cityWithoutList }) {
    const stack = technologies.split("/");
    const [city, setCity] = useState();
    useEffect(() => {
        if (cityWithoutList) {
            setCity({ name: cityWithoutList });
        } else {
            fetchOneCity(cityId).then(data => setCity(data));
        }
    }, []);

    function checkTechnology() {
        for (let i = 0; i < stack.length; i++) {
            if (stack[i] === tehnologyFilter) {
                return true;
            }
        }

        if (tehnologyFilter && tehnologyFilter != "") {
            return false
        } else {
            return true;
        }
    }

    function checkCity() {
        if (((cityFilter === "" || !cityFilter) || city.name.toLowerCase().includes(cityFilter.toLowerCase())) && checkTechnology() && checkName()) {
            return true;
        } else {
            return false;
        }
    }
    function checkName() {
        if (nameFilter && nameFilter != "") {
            if (name.toLowerCase().includes(nameFilter.toLowerCase())) {
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
            {(city && checkCity()) ?
                <NavLink to={(isAdmin) ? EXPERT_ADMIN_ROUTE + "/" + id : EXPERT_ROUTE + "/" + id}>
                    <section className="expert">
                        <div className="expert_image_container">
                            <img className="expert_image" src={process.env.REACT_APP_API_URL + image} alt="expert" />
                        </div>
                        <p className="expert_label paragraph_text">{name}</p>
                        {/* <div className="expert_container-location">
                            <img src={LocationImage} alt="location" />
                            <p className="location_paragraph paragraph_text">{(city) ? city.name : null}</p>
                        </div> */}
                        <div className="expert_container-stack">
                            {stack.map((technology, index) => (<p className={"stack_paragraph paragraph_text" + " stack_paragraph" + index} key={index}>#{technology}</p>))}
                        </div>
                        <div className="expert_container-hover">
                            <button className="expert_button button">Подробней</button>
                        </div>
                    </section>
                </NavLink> :
                <></>
            }
        </>
    );
}

export default ExpertCard;
