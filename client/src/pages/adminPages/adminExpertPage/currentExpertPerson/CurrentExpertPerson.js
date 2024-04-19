import "./CurrentExpertPerson.scss";
import { createExpert } from "../../../../http/expertApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WomenAvatar from "../../../../assets/images/womenAvatar.png";
import MenAvatar from "../../../../assets/images/menAvatar.png";
import DeleteImage from "../../../../assets/images/delete.svg";
import CustomInputFile from "../../../../custom/customInputFile/CustomInputFile";
import CustomButton from "../../../../custom/customButton/CustomButton";

function CurrentExpertPerson({ setBack }) {
    const [image, setImage] = useState(MenAvatar);
    const [city, setCity] = useState();
    const [cityWithoutList, setCityWithoutList] = useState();
    /*values */
    const [name, setName] = useState();
    const [sex, setSex] = useState("men");
    const [aboutText, setAboutText] = useState();
    const [email, setEmail] = useState();
    const [telegram, setTelegram] = useState();
    const [selectedImage, setSelectedImage] = useState();
    const [stack, setStack] = useState([""]);
    const [gitHib, setGitHib] = useState();
    const [linkedIn, setLinkedIn] = useState();
    const removeItem = (indexToRemove) => {
        setStack(prevArray => {
            const newArray = [...prevArray.slice(0, indexToRemove), ...prevArray.slice(indexToRemove + 1)];
            return newArray;
        });
    };
    function handleTehnologyAdd(e, index) {
        let newStack = stack;
        stack[index] = e;
        setStack(newStack);
    }
    function handleChangeImageDefault(sex, image) {
        setSex(sex);
        setSelectedImage(undefined);
        setImage(image);
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
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
    function addExpert() {
        let stackTehnology = "";
        for (let i = 0; i < stack.length; i++) {
            stackTehnology += stack[i];
            if (stack.length - 1 !== i) {
                stackTehnology += "/";
            }
        }
        if (name && aboutText && stackTehnology && (city || cityWithoutList)) {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('aboutText', aboutText);
            formData.append('image', selectedImage);
            formData.append('technologies', stackTehnology);
            if (city) {
                formData.append('cityId', city.id);
            } else {
                formData.append('cityWithoutList', cityWithoutList)
            }
            if (telegram) {
                formData.append('linkTelegram', telegram);
            }
            if (email) {
                formData.append('linkMail', email);
            }
            if (gitHib) {
                formData.append('linkGitHab', gitHib);
            }
            if (linkedIn) {
                formData.append('linkLinkedIn', linkedIn);
            }
            formData.append('sex', sex);
            createExpert(formData);
            alert("Эксперт успешно добален");
            window.location.reload();
        } else {
            alert("Заполните все поля");
        }
    }

    return (
        <div className="current_expert_page">
            <section className="expert_person">
                <div className="expert_person_container">
                    <div className="expert_person-left">
                        <input className="h2_text my_input" placeholder="ФИО" type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                        <div className="expert_person_container_reduct">
                            {stack.map((item, index) =>
                                <div className="tehnology_container" key={index}>
                                    <input className="paragraph_text my_input" placeholder="технология" type="text" onChange={(e) => handleTehnologyAdd(e.target.value, index)} />
                                    <img className="container_image" src={DeleteImage} onClick={() => removeItem(index)} alt="delete icon" />
                                </div>
                            )
                            }
                            <button className="button" onClick={() => setStack([...stack, ""])}>Добавить технологию</button>
                        </div>
                        <input className="h2_text my_input" placeholder="Город без списка" type="text" value={cityWithoutList} onChange={(e) => { setCityWithoutList(e.target.value) }} />
                        <CustomButton isFullObject={true} setValue={setCity} type="city" defaultValue="Город" />
                        <div className="expert_person_container">
                            <input className="paragraph_text my_input" type="text" value={telegram} onChange={(e) => setTelegram(e.target.value)} placeholder="telegram" />
                            <input className="paragraph_text my_input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="mail" />
                            <input className="paragraph_text my_input" type="text" value={gitHib} onChange={(e) => setGitHib(e.target.value)} placeholder="gitHub" />
                            <input className="paragraph_text my_input" type="text" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} placeholder="linkedIn" />
                        </div>
                    </div>
                    <div className="expert_person-center">
                        <div className="expert_person_center_image_container">
                            <img className="expert_person_image" src={image} alt="logo" />
                        </div>
                        <div className="expert_person_container">
                            <div className="container_sex">
                                <p className="paragraph_text" style={{ fontWeight: sex === "men" ? "bold" : "normal" }} onClick={() => handleChangeImageDefault("men", MenAvatar)}>Мужской</p>
                                <p className="paragraph_text" style={{ fontWeight: sex === "women" ? "bold" : "normal" }} onClick={() => handleChangeImageDefault("women", WomenAvatar)}>Женский</p>
                            </div>
                            <CustomInputFile handleImageChange={handleImageChange} />
                        </div>
                    </div>
                </div>
                <textarea className="expert_person_right paragraph_text" value={aboutText} onChange={(e) => setAboutText(e.target.value)} defaultValue="О себе" />
            </section>
            <button className="button" onClick={() => addExpert()}>Добавить эксперта</button>
        </div>
    );
}

export default CurrentExpertPerson;