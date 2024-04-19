import "./AnhorCard.scss"
import CardImage from "../../../assets/images/card_link.svg";
import LogoImage from "../../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { ADMIN_MAIN_ROUTE } from "../../../pages/appRouter/Const";

function AnhorCard({ title, description, path, isLink }) {
    return (
        <div className="anhor_card">
            {isLink ?
                <a target="_blank" href="https://docs.google.com/forms/d/1Oqt0y2dgP9NjVqxW3CBEaIWEPlZPKW1NmPHu_BuKYVA/viewform?edit_requested=true">
                    <h3 className="card_title h3_text">{title}</h3>
                    <p className="card_description paragraph_text">{description}</p>
                    <div className="card_container">
                        <img className="card_image-hidden" src={LogoImage} alt="logo" />
                        <img className="card_image" src={CardImage} alt="link" />
                    </div>
                </a>
                : <> <h3 className="card_title h3_text">{title}</h3>
                    <p className="card_description paragraph_text">{description}</p>
                    <div className="card_container">
                        <img className="card_image-hidden" src={LogoImage} alt="logo" />
                        <img className="card_image" src={CardImage} alt="link" />
                    </div>
                    <NavLink to={path || ADMIN_MAIN_ROUTE} onClick={() => path ? null : alert("В разработке")}>
                        <div className="anhor_card-back"></div>
                    </NavLink>
                </>
            }
        </div >
    );
}

export default AnhorCard;
