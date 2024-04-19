import "./CurrentExpertPerson.scss";
import { fetchOneCity } from "../../../../../http/cityApi";
import { useState, useEffect } from "react";
import WomenAvatar from "../../../../../assets/images/womenAvatar.png";
import MenAvatar from "../../../../../assets/images/menAvatar.png";
import DeleteImage from "../../../../../assets/images/delete.svg";
import CustomInputFile from "../../../../../custom/customInputFile/CustomInputFile";
import CustomButton from "../../../../../custom/customButton/CustomButton";

function CurrentExpertPerson({ }) {
    const [image, setImage] = useState();
    const [stack, setStack] = useState([""]);
    const [city, setCity] = useState();
    const removeItem = (indexToRemove) => {
        setStack(prevArray => {
            const newArray = [...prevArray.slice(0, indexToRemove), ...prevArray.slice(indexToRemove + 1)];
            return newArray;
        });
    };

    const [selectedImage, setSelectedImage] = useState(WomenAvatar);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            // Декодируем выбранный файл в формат Data URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setSelectedImage(null);
        }
    };
    return (
        <section className="expert_person">
            <div className="expert_person_container">
                <div className="expert_person-left">
                    <input className="h2_text my_input" placeholder="ФИО" type="text" />
                    <div className="expert_person_container_reduct">
                        {stack.map((item, index) =>
                            <div className="tehnology_container" key={index}>
                                <input className="paragraph_text my_input" placeholder="технология" type="text" />
                                <img className="container_image" src={DeleteImage} onClick={() => removeItem(index)} alt="delete icon" />
                            </div>
                        )
                        }
                        <button className="button" onClick={() => setStack([...stack, ""])}>Добавить технологию</button>
                    </div>
                    <CustomButton setValue={setCity} type="city" defaultValue="Город" />
                    <div className="expert_person_container">
                        <input className="paragraph_text my_input" type="text" placeholder="telegram" />
                        <input className="paragraph_text my_input" type="text" placeholder="mail" />
                    </div>
                </div>
                <div className="expert_person-center">
                    <img className="expert_person_image" src={selectedImage} alt="logo" />
                    <div className="expert_person_container">
                        <div className="container_sex">
                            <p onClick={() => setSelectedImage(MenAvatar)}>Мужской</p>
                            <p onClick={() => setSelectedImage(WomenAvatar)}>Женский</p>
                        </div>
                        <CustomInputFile handleImageChange={handleImageChange} />
                    </div>
                </div>
            </div>
            <textarea className="expert_person_right paragraph_text" defaultValue="О себе" />
        </section>
    );
}

export default CurrentExpertPerson;