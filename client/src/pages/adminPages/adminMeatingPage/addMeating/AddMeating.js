import "./AddMeating.scss";
import { useState, useEffect } from "react";
import TimeImage from "../../../../assets/images/time.svg";
import LocationImage from "../../../../assets/images/location_meating.svg"
import CustomButton from "../../../../custom/customButton/CustomButton";
import { postMeating } from "../../../../http/meatingApi";
import { useHistory } from 'react-router-dom';
import BackImage from "../../../../assets/images/arrowBack.svg";
import { deleteOneMeating, updateOneMeating } from "../../../../http/meatingApi";
import { fetchOneCity } from "../../../../http/cityApi";

export default function AddMeating({ item, setBack }) {
    const [dataToInput, setDataToInput] = useState((item && item !== "create") ? getData() : undefined);
    const [myData, setmyData] = useState((item && item !== "create") ? item.data : undefined);
    const [location, setLocation] = useState((item && item !== "create") ? item.location : undefined);
    const [time, setmyTime] = useState((item && item !== "create") ? item.time : undefined);
    const [city, setCityFilter] = useState({ name: "" });
    const [dateToShow, setDateToShow] = useState((item && item !== "create") ? setDataToShow(dataToInput) : undefined);

    const history = useHistory();

    useEffect(() => {
        if (item !== "create" && item) {
            fetchOneCity(item.cityId).then(data => setCityFilter(data));
        }
    }, []);

    /*for redacting page */
    function getData() {
        const newDataArr = item.data.split('.');
        return "2014-" + newDataArr[0] + "-" + newDataArr[1];
    }
    function setDataToShow(data) {
        const dataArr = data.split("-");
        return dataArr[2] + " " + setDataName(dataArr[1]);
    }

    /*for creating page */
    function setData(data) {
        setDataToInput(data);
        const dataArr = data.split("-");
        setmyData(dataArr[1] + "." + dataArr[2]);
        setDateToShow(dataArr[2] + " " + setDataName(dataArr[1]));
    }
    function setDataName(number) {
        switch (number) {
            case "1" || "01":
                return "января"
            case "2" || "02":
                return "февраля"
            case "3" || "03":
                return "марта"
            case "4" || "04":
                return "апреля"
            case "5" || "05":
                return "мая"
            case "6" || "06":
                return "июня"
            case "7" || "07":
                return "июля"
            case "8" || "08":
                return "августа"
            case "9" || "09":
                return "сентября"
            case "10":
                return "октября"
            case "11":
                return "ноября"
            case "12":
                return "декабря"
            default:
                return "января";
        }
    }
    function addMeating() {
        if (location && myData && time && city) {
            postMeating({ location: location, data: myData, time: time, cityId: city.id });
            alert("Встреча успешно назначенна");
            setBack(false);
            window.location.reload();
        } else {
            alert("Вы не заполнили все поля");
        }
    }
    function reductMeating() {
        if (location && myData && time && city) {
            updateOneMeating(item.id, { location: location, data: myData, time: time, cityId: city.id });
            alert("Встреча успешно отредактированна");
            window.location.reload();
        } else {
            alert("Вы не заполнили все поля");
        }
    }
    function deleteMeating() {
        const result = prompt("Для удаления встречи введите слово \"да\"", []);
        if (result === "да") {
            deleteOneMeating(item.id);
            alert("Встреча отменена");
            setBack(false);
            window.location.reload();
        }
    }
    return (
        <section className="add_meating">
            <div className="add_meating_label">
                <img src={BackImage} alt="arrow back" onClick={() => setBack(false)} />
                <h3 className="h3_text"> {item === "create" ? "Добавление встречи:" : "Редактирование встречи:"}</h3>
            </div>
            <div className="add_meating_setting">
                <input type="time" className="my_input" id="timeInput" name="timeInput" value={time} onChange={(e) => setmyTime(e.target.value)} />
                <input type="date" className="my_input" id="dateInput" name="dateInput" value={dataToInput} onChange={(e) => setData(e.target.value)} />
                <input type="text" className="my_input" placeholder="Локация" value={location} onChange={(e) => setLocation(e.target.value)} />
                <CustomButton setValue={setCityFilter} type="city" defaultValue="Город" isFullObject={true} />
            </div>
            <div className="add_meating_readyCard">
                <div className="meating_card">
                    <div className="meating_container-text">
                        <p className="meating_label-offline">OFFLINE</p>
                        <h2 className="meating_label h2_text">ВСТРЕЧА</h2>
                        <h2 className="meating_label-name h3_text">{"MOBILE BROADCAST " + (city ? city.name : "")}</h2>
                        <div className="meating_container meating_container-location">
                            <img className="meating_image-location" src={LocationImage} alt="location" />
                            <p className="meating_paragraph paragraph_text">{location}</p>
                        </div>
                        <div className="meating_container meating_container-time">
                            <img className="meating_image-time" src={TimeImage} alt="time" />
                            <p className="meating_paragraph paragraph_text">{dateToShow + " в " + time}</p>
                        </div>
                    </div>
                    <img className="meating_image" src={city ? process.env.REACT_APP_API_URL + city.image : ""} alt="city" />
                </div>
            </div>
            {item === "create" ?
                <button className="button" onClick={addMeating}>Добавить встречу</button>
                :
                <div className="button_container">
                    <button className="button" onClick={deleteMeating}>Удалить встречу</button>
                    <button className="button" onClick={reductMeating}>Принять изменения</button>
                </div>}

        </section>
    )
}