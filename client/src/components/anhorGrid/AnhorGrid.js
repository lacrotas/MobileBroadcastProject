import "./AnhorGrid.scss"
import AnhorCard from "./anhorCard/AnhorCard";
import { CITY_ROUTE, MEATING_ROUTE } from "../../pages/appRouter/Const";

function AnhorGrid() {
    return (
        <section className="anhor_grid">
            <AnhorCard title={"Создать сообщество"} description={"Вы можете подать заявку на регистрацию сообщества в своем городе"} path={"https://docs.google.com/forms/d/1Oqt0y2dgP9NjVqxW3CBEaIWEPlZPKW1NmPHu_BuKYVA/viewform?edit_requested=true"} isLink={true} />
            <AnhorCard title={"Список сообществ"} description={"Тут можно ознакомиться со списком сообществ Mobile Broadcast"} path={CITY_ROUTE} />
            {/* <AnhorCard title={"Список встреч"} description={"Тут можно ознакомиться со списком встреч Mobile Broadcast"} path={MEATING_ROUTE} /> */}
        </section>
    );
}

export default AnhorGrid;
