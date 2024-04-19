import "./CurrentExpertPerson.scss";
import { fetchOneCity } from "../../../../../http/cityApi";
import { useState, useEffect } from "react";
import WomenAvatar from "../../../../../assets/images/womenAvatar.png";
import MenAvatar from "../../../../../assets/images/menAvatar.png";
import TelegramImage from "../../../../../assets/images/telegram_circle.svg";
import MailImage from "../../../../../assets/images/mail_circle.svg";
import GitHubImage from "../../../../../assets/images/github.svg";
import LinkedInImage from "../../../../../assets/images/linkedIn.svg";

function CurrentExpertPerson({ name, image, aboutText, sex, technologies, cityId, linkTelegram, linkMail, linkGitHub, linkLinkedIn, cityWithoutList }) {
    const stack = technologies.split("/");
    const [city, setCity] = useState();
    const avatar = (sex === "men") ? MenAvatar : WomenAvatar;
    useEffect(() => {
        if (cityWithoutList) {
            setCity(cityWithoutList);
        }else{
            fetchOneCity(cityId).then(data => setCity(data));
        }
    }, []);
    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }
    return (
        <section className="expert_person_watch">
            <div className="expert_person_watch_container">
                <div className="expert_person-left">
                    <h2 className="h2_text">{name}</h2>
                    <div className="expert_person_container">
                        {stack.map((item, index) => (
                            <p className="paragraph_text" key={index}>{item}</p>
                        ))}
                    </div>
                    <p className="paragraph_text">{city ? city.name || city : null}</p>
                    <div className="expert_person_container">
                        {linkTelegram ?
                            <a target="blank" href={isValidUrl(linkTelegram) ? linkTelegram : ""}>
                                <img className="container_image" src={TelegramImage} />
                            </a> :
                            <></>}
                        {linkMail ?
                            <a target="blank" href={isValidUrl(linkMail) ? linkMail : ""}>
                                <img className="container_image" src={MailImage} />
                            </a> :
                            <></>}
                        {linkGitHub ?
                            <a target="blank" href={isValidUrl(linkGitHub) ? linkGitHub : ""}>
                                <img className="container_image" src={GitHubImage} />
                            </a> :
                            <></>}
                        {linkLinkedIn ?
                            <a target="blank" href={isValidUrl(linkLinkedIn) ? linkLinkedIn : ""}>
                                <img className="container_image" src={LinkedInImage} />
                            </a> :
                            <></>}
                    </div>
                </div>
                <div className="expert_person_watch_image_container">
                    <img className="expert_person_image" src={(image !== null) ? process.env.REACT_APP_API_URL + image : avatar} alt="logo" />
                </div>
            </div>
            <pre className="expert_person_paragraph_text paragraph_text">{aboutText}</pre>
        </section>
    );
}

export default CurrentExpertPerson;