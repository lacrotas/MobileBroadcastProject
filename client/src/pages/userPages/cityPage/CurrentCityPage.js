import CurrentCityInfo from "./components/currentCityInfo/CurrentCityInfo";
import CITYIMAGE from "../../../base/CITYIMAGE";
import SLIDER from "../../../base/SLIDER";
import Slider from "./components/slider/Slider";
import CityCreators from "./components/cityCreators/CityCreators";
import { fetchOneCity } from "../../../http/cityApi";
import { fetchAllGallaryImageByCityId } from "../../../http/gallaryImageApi";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


function CurrentCityPage({ cityId }) {
    const [city, setCity] = useState();
    const [imageArray, setImageArray] = useState();
    const { id } = useParams();
    useEffect(() => {
        fetchOneCity(id).then(data => setCity(data));
        fetchAllGallaryImageByCityId(id).then(data => setImageArray(data));
    }, []);
    return (
        <div className="current_city-page">
            {city &&
                <CurrentCityInfo img={city.image} link={city.link} />
            }
            {(imageArray && imageArray.length != 0) &&
                <Slider imgArr={imageArray} />
            }
            <CityCreators />
        </div>
    );
}

export default CurrentCityPage;
