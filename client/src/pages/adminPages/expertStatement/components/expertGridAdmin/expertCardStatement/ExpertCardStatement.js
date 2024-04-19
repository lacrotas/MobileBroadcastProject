import "./ExpertCardStatement.scss";
import CardLinkImage from "../../../../../../assets/images/card_link.svg";
import { useState } from "react";
import NavigationImage from "../../../../../../assets/images/location.svg";
import mailImage from "../../../../../../assets/images/mail_circle.svg";
import telegramImage from "../../../../../../assets/images/telegram_circle.svg";

function ExpertCardStatement({ name, city, links, technologies, aboutText }) {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const technology = technologies.split('/');
    // const link = links
    return (
        <div>

            <div className="expert_statement_card-close" onClick={() => { setIsCardOpen(true) }}>
                <h3 className="expert_statement_card_label h3_text">{city}</h3>
                <p className="expert_statement_card_paragraph paragraph_text">{aboutText}</p>
                <img className="expert_statement_card_image" src={CardLinkImage} alt="card link" />
            </div>

            {isCardOpen &&
                <div className="expert_statement_card-open">
                    <div className="expert_statement_card_container">
                        <h2 className="expert_statement_card_label h2_text">Заявление на эксперта</h2>
                        <div className="container_expert_statement">
                            <p className="expert_statement_card_paragraph paragraph_text">{name}</p>
                            <div className="container_expert_statement-tehnologies">
                                {technology.map((item, index) => (
                                    <p className="paragraph_text" key={index}>{item}</p>
                                ))}
                            </div>
                        </div>
                        <div className="container_expert_statement">
                            <div className="container_expert_statement-link">
                                <img className="container_image" src={telegramImage} alt="telegram" />
                                <img className="container_image" src={mailImage} alt="mail" />
                            </div>
                            <div className="container_expert_statement-navigation">
                                <img className="container_image" src={NavigationImage} alt="mail" />
                                <p className="paragraph_text">{city}</p>
                            </div>
                        </div>
                        <p className="expert_statement_card_paragraph paragraph_text">{aboutText}</p>
                        <div className="container_expert_statement_buttons">
                            <button className="expert_statement_button button">Отклонить</button>
                            <button className="expert_statement_button button">Одобрить</button>
                        </div>
                    </div>
                    <div className="expert_statement_card-open_back" onClick={() => setIsCardOpen(false)}></div>
                </div>
            }
        </div >
    );
}
export default ExpertCardStatement;