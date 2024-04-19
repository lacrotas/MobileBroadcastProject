import { useState, useEffect } from "react";
import { MAP_PATH } from "../../../components/map/mapPath";
import BackImage from "../../../assets/images/arrowBack.svg";
import { createCountry, fetchCountries, deleteOneCountry, updateOneCountry, fetchAllCityByContry, deleteOneCity } from "../../../http/cityApi";
import { deleteExpertsByCityId } from "../../../http/expertApi";
import { deleteMeatingsByCityId } from "../../../http/meatingApi";

function AdminMap({ setAddMeating }) {
    const [step, setStep] = useState(1);
    const [currentCountry, setCurrentCountry] = useState();
    const [countryName, setCountryName] = useState();
    const [strokeColor, setStrokeColor] = useState("#000");
    const [backColor, setBackColor] = useState("#000");
    const [isReducting, setIsReducting] = useState(false);
    const [currentCountryIndex, setCurrentCountryIndex] = useState();
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
    function checkCurentCounry(index) {
        for (let i = 0; i < allCountry.length; i++) {
            if (index === allCountry[i].countryIndex) {
                setBackColor(allCountry[i].bgColor);
                setStrokeColor(allCountry[i].strokeColor);
                setCountryName(allCountry[i].name);
                setIsReducting(true);
                setCurrentCountryIndex(allCountry[i].id);
                return (true);
            }
        }
        return false;
    }
    function handleBack() {
        setBackColor("#000");
        setStrokeColor("#000");
        setCountryName();
        setIsReducting(false);
        setCurrentCountry();
        setStep(1);
        setCurrentCountryIndex();
    }
    /* for creating country*/
    function handeleCountryCreate(index) {
        checkCurentCounry(index);
        if (step === 1) {
            setCurrentCountry(index);
            setStep(2);
        }
    }

    function addCountry() {
        if (countryName && backColor && strokeColor && currentCountry) {
            createCountry({ name: countryName, bgColor: backColor, strokeColor: strokeColor, countryIndex: currentCountry });
            alert("Страна успешно добавлена");
            window.location.reload();
        } else {
            alert("Вы не заполнили все поля");
        }
    }
    function updateCountry() {
        if (countryName && backColor && strokeColor && currentCountry) {
            updateOneCountry(currentCountryIndex, { name: countryName, bgColor: backColor, strokeColor: strokeColor, countryIndex: currentCountry });
            alert("Страна успешно отредактированна");
            window.location.reload();
        } else {
            alert("Вы не заполнили все поля");
        }
    }
    function deleteCountry() {
        const result = prompt("Если вы удалите страну удаляться все города, эксперты, сообщества, встречи связанные с этой страной? Если уверены введите слово \"да\"", []);
        if (result === "да") {
            deleteAllRelations()
            deleteOneCountry(currentCountryIndex);
            alert("Страна удалена");
            window.location.reload();
        }
    }
    function deleteAllRelations() {
        fetchAllCityByContry(currentCountryIndex).then(data => {
            data.map((item) => deleteExpertsByCityId(item.id))
            data.map((item) => deleteMeatingsByCityId(item.id))
            data.map((item) => deleteOneCity(item.id))
        });
    }

    return (
        <div className="modal_map_svg_page">
            {(step === 1) ?
                <div className="modal_map_setting">
                    <h3 className="h3_text">Выберите страну</h3>
                </div> :
                (step == 2) ?
                    <div className="modal_map_setting-second">
                        <img className="image" src={BackImage} alt="back-arrow" onClick={() => handleBack()} />
                        <h3 className="h3_text">Выберите цвет</h3>
                        <input className="my_input" type="text" value={countryName} onChange={(e) => setCountryName(e.target.value)} placeholder="название страны" />
                        <div className="input_container">
                            <p className="paragraph_text">Граница</p>
                            <input value={strokeColor} type="color" className="my_input" placeholder="цвет границы" onChange={(e) => setStrokeColor(e.target.value)} />
                        </div>
                        <div className="input_container">
                            <p className="paragraph_text">Фон</p>
                            <input value={backColor} type="color" className="my_input" placeholder="цвет границы" onChange={(e) => setBackColor(e.target.value)} />
                        </div>
                    </div> :
                    <></>
            }
            <svg width="677" height="364" viewBox="0 0 800 309" fill="none" xmlns="http://www.w3.org/2000/svg">
                {MAP_PATH.map((item, index) => (
                    <path d={item} key={index} fill={checkCountryOnStyle(index) ? checkCountryOnStyle(index)[0] : "#B3A8A8"} style={(index === currentCountry) ? { fill: backColor, stroke: strokeColor } : {}} onClick={() => { handeleCountryCreate(index) }} />
                ))}
            </svg>
            {(step == 2) &&
                <div>
                    {!isReducting ?
                        <button className="map_registrate_button button" onClick={() => addCountry()}>Добавить страну</button>
                        :
                        <div className="map_button_container">
                            <button className="button" onClick={() => deleteCountry()}>Удалить</button>
                            <button className="button" onClick={() => updateCountry()}>Применить изменения</button>
                        </div>

                    }
                </div>
            }
        </div>
    );
}

export default AdminMap;