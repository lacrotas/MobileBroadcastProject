import "./AdminCityPage.scss";
import AdminCitytFilter from "./AdminCitytFilter";
import AdminCityGrid from "./AdminCityGrid";
import { useState, useEffect } from "react";
import DeleteImage from "../../../assets/images/delete.svg"
import CustomButton from "../../../custom/customButton/CustomButton";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchOneCity, deleteOneCity, updateOneCity } from "../../../http/cityApi";
import { postGallaryImage, fetchAllGallaryImageByCityId, deleteGallatyImageById } from "../../../http/gallaryImageApi";
import { deleteExpertsByCityId } from "../../../http/expertApi";
import { deleteMeatingsByCityId } from "../../../http/meatingApi";
import { fetchAllCreatorsByCityId } from "../../../http/creatorApi";
import { deleteAllCreatorsByCityId } from "../../../http/creatorApi";
import CreatorCard from "../../../custom/creatorCard/CreatorCard";
import ModalWindow from "../../../custom/modalWindow/ModalWindow";
import {CITY_ADMIN_ROUTE} from "../../appRouter/Const";

export default function CurrentAdminCityPage() {
    const { id } = useParams();
    const [currentCity, setCurrentCity] = useState();
    const [creatorArr, setCreatorArr] = useState([]);
    useEffect(() => {
        fetchAllGallaryImageByCityId(id).then(data => setGallary(data));
        fetchAllCreatorsByCityId(id).then(data => setCreatorArr(data));
        if (!currentCity) {
            fetchOneCity(id).then(data => setCurrentCity(data));
        }
        if (currentCity) {
            init()
        }
    }, [currentCity]);

    /* form values */
    const [cityName, setCityName] = useState();
    const [cityLink, setCityLink] = useState();
    const [cityLogo, setCityLogo] = useState("Логотип");
    const [country, setCountry] = useState();
    /* design statement */
    const [cityLogoText, setCityLogoText] = useState("Логотип");

    const history = useHistory();

    /* save file */
    function setFileInputLogo(e) {
        setCityLogo(e.target.files[0]);
        setCityLogoText(e.target.value.slice(-10));
    }
    /*gallary */
    const [gallary, setGallary] = useState([]);
    const [indexGallaryToRemove, setIndexGallaryToRemove] = useState([]);

    /*creators */
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(false);
    
    function setCityToReduct(item) {
        if (item) {
            setSelectedItem(item);
        } else {
            setSelectedItem(false);
        }
        setIsModalOpen(true);
    }
    function setIndexToRemove(id, index) {
        let newArr = indexGallaryToRemove;
        indexGallaryToRemove.push(id);
        setIndexGallaryToRemove(newArr);
        removeItem(index)
    }
    function init() {
        setCityName(currentCity.name);
        setCityLink(currentCity.link);
        setCityLogo(process.env.REACT_APP_API_URL + currentCity.image);
        setCityLogoText(currentCity.image.slice(-15));
        setCountry(currentCity.countryId);
    }
    const removeItem = (indexToRemove) => {
        setGallary(prevArray => {
            const newArray = [...prevArray.slice(0, indexToRemove), ...prevArray.slice(indexToRemove + 1)];
            return newArray;
        });
    };
    function handleGallatyAdd(e, index) {
        let newStack = gallary;
        newStack[index] = e;
        setGallary(newStack);
    }
    function updateCity() {
        if (cityName && cityLink && cityLogo && country) {
            const formData = new FormData()
            formData.append('name', cityName);
            formData.append('link', cityLink);
            formData.append('image', (typeof cityLogo === "object") ? cityLogo : cityLogo.split(process.env.REACT_APP_API_URL)[1]);
            formData.append('countryId', country.id || country);
            UpdateGallary();
            updateOneCity(id, formData);
            alert("Сообщество успешно отредактированно");
            window.location.reload();
        } else {
            alert("Заполните все поля");
        }

    }
    function deleteCity() {
        const result = prompt("Если вы удалите город удаляться все эксперты и встречи связанные с этим городом. Если уверены введите слово \"да\"", []);
        if (result === "да") {
            deleteAllRelations();
            deleteOneCity(currentCity.id);
            alert("Город удален");
            history.push(CITY_ADMIN_ROUTE);
        }
    }
    function deleteAllRelations() {
        try {
            deleteAllCreatorsByCityId(currentCity.id);
            deleteExpertsByCityId(currentCity.id);
            deleteMeatingsByCityId(currentCity.id);
        } catch (e) {
        }
    }
    function UpdateGallary() {
        let finalGallary = [];
        console.log(gallary);
        for (let i = 0; i < gallary.length; i++) {
            if (gallary[i] !== "") {
                if (gallary[i] instanceof File || gallary[i] instanceof Blob) {
                    finalGallary.push(gallary[i]);
                }
            }
        }
        finalGallary.forEach((file) => {
            const formData = new FormData()
            formData.append('file', file);
            formData.append('cityId', id);
            postGallaryImage(formData);
        });
        console.log(finalGallary);
        indexGallaryToRemove.forEach((id) => deleteGallatyImageById(id));
    }
    return (
        <section>
            <div className="admin_city_page">
                <h3 className="h3_text">Редактирование сообщества:</h3>
                <div className="admin_city_page_container">
                    <input className="my_input" type="text" value={cityName} placeholder="Город" onChange={(e) => setCityName(e.target.value)} />
                    <input className="my_input" type="text" value={cityLink} placeholder="Телеграм" onChange={(e) => setCityLink(e.target.value)} />
                    <CustomButton type="country" defaultValue="Страна" isFullObject={true} setValue={setCountry} />
                    <div className="file-input-container">
                        <input type="file" id="fileInput" accept=".png, .jpg, .svg" className="file-input" onChange={(e) => setFileInputLogo(e)} />
                        <label htmlFor="fileInput" className="custom-button">{cityLogoText}</label>
                    </div>
                </div>
                <div className="container_galary">
                    <h3 className="h3_text">Галерея:</h3>
                    <div className="gallary_person_container_reduct">
                        {gallary.map((item, index) =>
                            <div className="galary_container" key={index}>
                                {
                                    (item.hasOwnProperty('file')) ?
                                        <>
                                            <p className="paragraph_text my_input">{item.file}</p>
                                            <img className="container_image" src={DeleteImage} onClick={() => setIndexToRemove(item.id, index)} alt="delete icon" />
                                        </>
                                        :
                                        <>
                                            <input className="paragraph_text my_input" placeholder="технология" type="file" onChange={(e) => handleGallatyAdd(e.target.files[0], index)} />
                                            <img className="container_image" src={DeleteImage} onClick={() => removeItem(index)} alt="delete icon" />
                                        </>
                                }
                            </div>
                        )}
                        <button className="button" onClick={() => setGallary([...gallary, ""])}>Добавить изображение</button>
                    </div>
                </div>
                <div className="container_organizator">
                    <h3 className="h3_text">Организаторы:</h3>
                    <div className="organizator_person_container_reduct">
                        {creatorArr.map((item, index) =>
                            <div className="galary_container" key={index} onClick={() => setCityToReduct(item)}>
                                <CreatorCard image={process.env.REACT_APP_API_URL + item.image} name={item.name}
                                    telegram={item.telegram} mail={item.mail} />
                            </div>
                        )}
                        <button className="button" onClick={() => setCityToReduct(false)}>Добавить организатора</button>
                    </div>
                </div>
                {(isModalOpen && selectedItem) &&
                    < ModalWindow isReduct={true} nameValue={selectedItem.name}
                        telegramValue={selectedItem.telegram} mailValue={selectedItem.mail} imageValue={selectedItem.image}
                        type={'addExpert'} creatorId={selectedItem.id} closeModal={setIsModalOpen} cityId={id} />
                }
                {(isModalOpen && !selectedItem) &&
                    < ModalWindow isReduct={false} type={'addExpert'} closeModal={setIsModalOpen} cityId={id} />
                }
                <div className="button_container_flex">
                    <button className="button" onClick={() => deleteCity()}>Удалить сообщество</button>
                    <button className="button" onClick={() => updateCity()}>Применить изменения</button>
                </div>
            </div>
        </section>
    )
}