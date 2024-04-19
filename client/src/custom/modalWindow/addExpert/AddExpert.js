import "./AddExpert.scss";
import { postCreator, updateOneCreator, deleteCreatorById } from "../../../http/creatorApi";
import { useState, useEffect } from "react";
import CustomInputFile from "../../../custom/customInputFile/CustomInputFile";
import MenAvatar from "../../../assets/images/menAvatar.png";
import WomenAvatar from "../../../assets/images/womenAvatar.png";

function AddExpert({ cityId, creatorId, closeModal, nameValue, telegramValue, mailValue, imageValue, isReduct }) {
    const [name, setName] = useState("");
    const [telegram, setTelegram] = useState("");
    const [mail, setMail] = useState("");
    const [image, setImage] = useState(MenAvatar);
    const [selectedImage, setSelectedImage] = useState();
    const [sex, setSex] = useState("men");
    const [isImageChenged, setIsImageChenged] = useState(false);

    useEffect(() => {
        if (isReduct) {
            init();
        }
    }, [isReduct])
    function addCreator() {
        if (name, image) {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("telegram", telegram);
            formData.append("mail", mail);
            formData.append("cityId", cityId);
            formData.append("sex", sex);
            formData.append("image", selectedImage);
            postCreator(formData);
            alert("Организатор успешно добавлен");
            window.location.reload();
        } else {
            alert("заполните все поля");
        }
    }
    function init() {
        if (isReduct) {
            setName(nameValue);
            setTelegram(telegramValue);
            setMail(mailValue);
            setImage(imageValue);
        }
    }
    function reductCreator() {
        if (name, image) {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("telegram", telegram);
            formData.append("mail", mail);
            formData.append("cityId", cityId);
            formData.append("sex", sex);
            if (typeof (selectedImage) !== String(undefined)) {
                console.log("selectedImage");
                console.log(selectedImage);
                formData.append("image", selectedImage);
            } else {
                console.log("image");
                console.log(image);
                formData.append("image", image);
            }
            updateOneCreator(creatorId, formData);
            alert("Организатор успешно отредактирован");
            window.location.reload();
        } else {
            alert("заполните все поля");
        }
    }
    function deleteCreator() {
        const result = prompt("Вы собираетесь удалить организатора сообщества. Если уверены введите слово \"да\"", []);
        if (result === "да") {
            deleteCreatorById(creatorId);
            window.location.reload();
        }
    }
    function handleChangeImageDefault(sex, image) {
        setSex(sex);
        setSelectedImage(undefined);
        setImage(image);
        setIsImageChenged(true);
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
        setIsImageChenged(true);
        setSex(false);
        if (file) {
            // Декодируем выбранный файл в формат Data URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImage(null);
        }
    };
    return (
        <div className="expert_statement">
            {isReduct ?
                <h3 className="authorizaton_label h3_text">Редактирование организатора</h3>
                :
                <h3 className="authorizaton_label h3_text">Добавление организатора</h3>
            }
            <input type="text" className="expert_statement_input my_input" placeholder="ФИО" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" className="expert_statement_input my_input" placeholder="Телеграмм" value={telegram} onChange={(e) => setTelegram(e.target.value)} />
            <input type="text" className="expert_statement_input my_input" placeholder="Почта" value={mail} onChange={(e) => setMail(e.target.value)} />
            <div className="expert_person-center">
                <div className="expert_person_center_image_container">
                    {isReduct && !isImageChenged ?
                        <img className="expert_person_image" src={process.env.REACT_APP_API_URL + image} alt="logo" />

                        :
                        <img className="expert_person_image" src={image} alt="logo" />
                    }
                </div>
                <div className="expert_person_container">
                    <p className="paragraph_text" style={{ fontWeight: sex === "men" ? "bold" : "normal" }} onClick={() => handleChangeImageDefault("men", MenAvatar)}>Мужской</p>
                    <p className="paragraph_text" style={{ fontWeight: sex === "women" ? "bold" : "normal" }} onClick={() => handleChangeImageDefault("women", WomenAvatar)}>Женский</p>
                    <CustomInputFile handleImageChange={handleImageChange} />
                </div>
            </div>
            {isReduct ?
                <>
                    <button className="expert_statement_button button" onClick={() => deleteCreator()}>Удалить</button>
                    <button className="expert_statement_button button" onClick={() => reductCreator()}>Редактировать</button>
                </>
                :
                <button className="expert_statement_button button" onClick={() => addCreator()}>Отправить</button>
            }
        </div>
    );
}

export default AddExpert;