import "./CurrentExpertPerson.scss";
import { fetchOneCity } from "../../../../../http/cityApi";
import { useState, useEffect } from "react";
import WomenAvatar from "../../../../../assets/images/womenAvatar.png";
import MenAvatar from "../../../../../assets/images/menAvatar.png";
import CustomButton from "../../../../../custom/customButton/CustomButton";
import CustomInputFile from "../../../../../custom/customInputFile/CustomInputFile";
import DeleteImage from "../../../../../assets/images/delete.svg";

function CurrentExpertPerson({ name, image, aboutText, sex, technologies, cityId, linkTelegram, linkMail, setCurrentExpertPersonValues, deleteExpert, updateExpert, linkGitHab, linkLinkedIn, cityWithoutList }) {
    const [stackValue, setStackValue] = useState(technologies.split("/"));
    const avatar = (sex === "men") ? MenAvatar : WomenAvatar;
    /* values */
    const [cityWithoutListValue, setCityWithoutListValue] = useState(cityWithoutList || "");
    const [nameValue, setNameValue] = useState(name);
    const [telegram, setTelegram] = useState(linkTelegram);
    const [mail, setMail] = useState(linkMail);
    const [gitHib, setGitHib] = useState(linkGitHab);
    const [linkedIn, setLinkedIn] = useState(linkLinkedIn);
    const [city, setCity] = useState();
    const [selectedImage, setSelectedImage] = useState(image);
    const [sexValue, setSex] = useState(sex);
    const [imageValue, setImageValue] = useState(process.env.REACT_APP_API_URL + image);
    const [aboutTextValue, setAboutTextValue] = useState(aboutText);
    useEffect(() => {
        if (cityWithoutList) {

        } else {
            fetchOneCity(cityId).then(data => setCity(data));
        }
    }, []);

    const removeItem = (indexToRemove) => {
        setStackValue(prevArray => {
            const newArray = [...prevArray.slice(0, indexToRemove), ...prevArray.slice(indexToRemove + 1)];
            return newArray;
        });
    };
    function handleTehnologyAdd(e, index) {
        let newStack = stackValue;
        newStack[index] = e;
        setStackValue(newStack);
    }
    function handleChangeImageDefault(sex, image) {
        setSex(sex);
        setSelectedImage(undefined);
        setImageValue(image);
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
        if (file) {
            // Декодируем выбранный файл в формат Data URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageValue(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImageValue(null);
        }
    };

    function setData() {
        setCurrentExpertPersonValues({
            name: nameValue, sex: sexValue, aboutText: aboutTextValue,
            image: selectedImage, technologies: stackValue, cityId: city.id,
            linkTelegram: telegram, linkMail: mail, linkGitHab: gitHib, linkLinkedIn: linkedIn,
            cityWithoutList: cityWithoutListValue
        });
    }
    function update() {
        updateExpert({
            name: nameValue, sex: sexValue, aboutText: aboutTextValue,
            image: selectedImage, technologies: stackValue, cityId: city,
            linkTelegram: telegram, linkMail: mail, linkGitHab: gitHib, linkLinkedIn: linkedIn,
            cityWithoutList: cityWithoutListValue
        });
    }
    return (
        <>
            <section className="expert_person">
                <div className="expert_person_container">
                    <div className="expert_person-left">
                        <input className="h2_text my_input" placeholder="ФИО" type="text" value={nameValue} onChange={(e) => { setNameValue(e.target.value) }} />
                        <div className="expert_person_container_reduct">
                            {stackValue.map((item, index) =>
                                <div className="tehnology_container" key={index}>
                                    <input className="paragraph_text my_input" value={item} placeholder="технология" type="text" onChange={(e) => handleTehnologyAdd(e.target.value, index)} />
                                    <img className="container_image" src={DeleteImage} onClick={() => removeItem(index)} alt="delete icon" />
                                </div>
                            )
                            }
                            <button className="button" onClick={() => setStackValue([...stackValue, ""])}>Добавить технологию</button>
                        </div>
                        <input className="h2_text my_input" placeholder="Город без списка" type="text" value={cityWithoutListValue} onChange={(e) => { setCityWithoutListValue(e.target.value) }} />
                        {cityId ?
                            <CustomButton choosenValue={cityId} isFullObject={true} setValue={setCity} type="city" defaultValue="Город" />
                            : <CustomButton isFullObject={true} setValue={setCity} type="city" defaultValue="Город" />}
                        <div className="expert_person_container">
                            <input className="paragraph_text my_input" type="text" value={telegram} onChange={(e) => setTelegram(e.target.value)} placeholder="telegram" />
                            <input className="paragraph_text my_input" type="text" value={mail} onChange={(e) => setMail(e.target.value)} placeholder="mail" />
                            <input className="paragraph_text my_input" type="text" value={gitHib} onChange={(e) => setGitHib(e.target.value)} placeholder="gitHub" />
                            <input className="paragraph_text my_input" type="text" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} placeholder="linkedIn" />
                        </div>
                    </div>
                    <div className="expert_person-center">
                        <div className="expert_person_center_image_container">
                            <img className="expert_person_image" src={imageValue} alt="logo" />
                        </div>
                        <div className="expert_person_container">
                            <div className="container_sex">
                                <p className="paragraph_text" style={{ fontWeight: sexValue === "men" ? "bold" : "normal" }} onClick={() => handleChangeImageDefault("men", MenAvatar)}>Мужской</p>
                                <p className="paragraph_text" style={{ fontWeight: sexValue === "women" ? "bold" : "normal" }} onClick={() => handleChangeImageDefault("women", WomenAvatar)}>Женский</p>
                            </div>
                            <CustomInputFile handleImageChange={handleImageChange} />
                        </div>
                    </div>
                </div>
                <textarea className="expert_person_paragraph_text paragraph_text" value={aboutTextValue} onChange={(e) => setAboutTextValue(e.target.value)} />
            </section>
            <div className="admin_current_expert">
                <button className="button" onClick={() => deleteExpert()}>Удалить эксперта</button>
                <button className="button" onClick={() => update()}>Применить изменения</button>
            </div>
        </>
    );
}

export default CurrentExpertPerson;