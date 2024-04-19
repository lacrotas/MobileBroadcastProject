import "./AdminCityPage.scss";
import AdminCityFilter from "./AdminCitytFilter";
import AdminCityGrid from "./AdminCityGrid";
import { useState } from "react";
import DeleteImage from "../../../assets/images/delete.svg"
import CustomButton from "../../../custom/customButton/CustomButton";
import { createCity } from "../../../http/cityApi";
import { postGallaryImage } from "../../../http/gallaryImageApi";

export default function AdminCityPage() {
    /*filters for search */
    const [countryFilter, setCountryFilter] = useState(false);
    const [nameFilter, setNameFilter] = useState(false);

    /*conditions */
    const [addMeating, setAddMeating] = useState(false);
    /* form values */
    const [cityName, setCityName] = useState();
    const [cityLink, setCityLink] = useState();
    const [cityLogo, setCityLogo] = useState("Логотип");
    const [country, setCountry] = useState();
    /* design statement */
    const [cityLogoText, setCityLogoText] = useState("Логотип");

    /* save file */
    function setFileInputLogo(e) {
        setCityLogo(e.target.files[0]);
        setCityLogoText(e.target.value.slice(-10));
    }

    function addCity() {
        if (cityName && cityLink && cityLogo && country) {
            const formData = new FormData()
            formData.append('name', cityName)
            formData.append('link', cityLink)
            formData.append('image', cityLogo)
            formData.append('countryId', country.id)
            createCity(formData);
            alert("Сообщество успешно созданно");
            window.location.reload();
        } else {
            alert("Заполните все поля");
        }
    }
    return (
        <section>
            {!addMeating ?
                <>
                    <AdminCityFilter setNameFilter={setNameFilter} setCountryFilter={setCountryFilter} />
                    <AdminCityGrid nameFilter={nameFilter} countryFilter={countryFilter} setAddMeating={setAddMeating} />
                </>
                :
                <div className="admin_city_page">
                    <h3 className="h3_text">Создание сообщества:</h3>
                    <div className="admin_city_page_container">
                        <input className="my_input" type="text" value={cityName} placeholder="Город" onChange={(e) => setCityName(e.target.value)} />
                        <input className="my_input" type="text" value={cityLink} placeholder="Телеграм" onChange={(e) => setCityLink(e.target.value)} />
                        <CustomButton type="country" defaultValue="Страна" isFullObject={true} setValue={setCountry} />
                        <div className="file-input-container">
                            <input type="file" id="fileInput" accept=".png, .jpg, .svg" className="file-input" onChange={(e) => setFileInputLogo(e)} />
                            <label htmlFor="fileInput" className="custom-button">{cityLogoText}</label>
                        </div>
                    </div>

                    <button className="button button_final" onClick={() => addCity()}>Добавить сообщество</button>
                </div>
            }
        </section>
    )
}