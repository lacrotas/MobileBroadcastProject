import TelegramImage from "../../assets/images/telegram_circle.svg";
import MailImage from "../../assets/images/mail_circle.svg";
import "./CreatorCard.scss";

function CreatorCard({ image, name, telegram, mail }) {
    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }
    return (
        <div className="creators_card">
            <div className="creators_image_container">
            <img className="creators_image" src={image} alt="creators image" />
            </div>
            <p className="creators_card_label paragraph_text">{name}</p>
            {telegram &&
                <a target="blank" href={isValidUrl(telegram) ? telegram : ""}>
                    <div className="creators_container">
                        <img className="creators_container_image" src={TelegramImage} alt="telegram" />
                        <p className="creators_container_paragraph paragraph_text">{telegram}</p>
                    </div>
                </a>

            }
            {mail &&
                <a target="blank" href={isValidUrl(mail) ? mail : ""}>
                    <div className="creators_container">
                        <img className="creators_container_image" src={MailImage} alt="telegram" />
                        <p className="creators_container_paragraph paragraph_text">{mail}</p>
                    </div>
                </a>

            }
        </div>
    )
}

export default CreatorCard;