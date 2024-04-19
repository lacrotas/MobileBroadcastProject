import "./CityCreators.scss";
import CreatorCard from "../../../../../custom/creatorCard/CreatorCard.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min.js";
import { fetchAllCreatorsByCityId } from "../../../../../http/creatorApi.js";

function CityCreators() {
    const [creators, setCreators] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchAllCreatorsByCityId(id).then(data => setCreators(data));
    }, []);

    return (
        <section className="city_creators">
            <div className="city_creators_container">
                <h3 className="city_creators_text h3_text">Организаторы сообщества</h3>
                <p className="city_creators_paragraph paragraph_text">Эти люди основали
                    сообщество в данном городе,
                    если у вас есть идеи по его
                    улучшению, свяжитесь с ними</p>
            </div>
            {creators.map((organizator, index) => (
                <CreatorCard key={index} image={process.env.REACT_APP_API_URL + organizator.image}
                    name={organizator.name} telegram={organizator.telegram}
                    mail={organizator.mail} />
            ))}
        </section >
    );
}

export default CityCreators;
