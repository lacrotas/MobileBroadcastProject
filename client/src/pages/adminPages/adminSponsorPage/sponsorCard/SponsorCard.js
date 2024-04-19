import "./SponsorCard.scss"
import CardImage from "../../../../assets/images/delete.svg";
import LogoImage from "../../../../assets/images/logo.svg";
import { deleteOneSponsorPanel } from "../../../../http/sponsorPanelApi";

function SponsorCard({ title, description, id, image }) {
    function deleteCard() {
        const result = prompt("Вы хотите удалить данного партнера? Если уверены введите слово \"да\"", []);
        if (result === "да") {
            try {
                deleteOneSponsorPanel(id);
                alert("Заявление удалено");
                window.location.reload();
            } catch (e) {
                alert("Произошла ошибка, перезагрузка станицы");
                window.location.reload();
            }
        }
    }
    return (
        <div className="statement_card">
            <h3 className="card_title h3_text">{title}</h3>
            <p className="card_description paragraph_text">{description}</p>
            <img className="card_image-sponsor" src={process.env.REACT_APP_API_URL + image} alt="logo" />
            <div className="card_container">
                <img className="card_image-hidden" src={LogoImage} alt="logo" />
                <img className="card_image" onClick={() => deleteCard()} src={CardImage} alt="link" />
            </div>
        </div>
    );
}

export default SponsorCard;
