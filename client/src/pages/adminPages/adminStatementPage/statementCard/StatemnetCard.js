import "./StatemnetCard.scss"
import CardImage from "../../../../assets/images/delete.svg";
import LogoImage from "../../../../assets/images/logo.svg";
import { deleteOneExpertStatement } from "../../../../http/sponsorStatementApi";

function StatementCard({ title, description, id }) {
    function deleteCard() {
        const result = prompt("Вы хотите удалить данное заявление? Если уверены введите слово \"да\"", []);
        if (result === "да") {
            try {
                deleteOneExpertStatement(id);
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
            <div className="card_container">
                <img className="card_image-hidden" src={LogoImage} alt="logo" />
                <img className="card_image" onClick={() => deleteCard()} src={CardImage} alt="link" />
            </div>
        </div>
    );
}

export default StatementCard;
