import "./AdminMainPage.scss";
import AnhorCard from "../../../components/anhorGrid/anhorCard/AnhorCard";
import { CITY_ADMIN_ROUTE, MEATING_ADMIN_ROUTE, COUNTRY_ADMIN_ROUTE, EXPERT_ADMIN_ROUTE, USER_REDUCT, ADMIN_SPONSOR } from "../../../pages/appRouter/Const";

function AdminMainPage() {
    return (
        <section className="admin_main_page anhor_grid">
            <AnhorCard title={"Редактирование встреч"} description={"Здесь можно добавить, отменить или редактировать встречу назначенную сообществом"} path={MEATING_ADMIN_ROUTE} />
            <AnhorCard title={"Редактирование карты"} description={"Здесь можно добавить, удалить страну на карте, а также изменить её цвет"} path={COUNTRY_ADMIN_ROUTE} />
            <AnhorCard title={"Редактирование сообщества"} description={"Здесь можно добавить, отменить или редактировать сообщества Mobile Broadcast"} path={CITY_ADMIN_ROUTE} />
            <AnhorCard title={"Редактирование экспертов"} description={"Здесь отображаются все эксперты данного сообщества, после выбора нужного вы можете редактировать его"} path={EXPERT_ADMIN_ROUTE} />
            <AnhorCard title={"Редактирование партнеров"} description={"Здесь можно добавить/удалить партнера"} path={ADMIN_SPONSOR} />
            <AnhorCard title={"Учетная запись"} description={"Здесь можно отредактировать логин и пароль к странице администратора"} path={USER_REDUCT} />

        </section>
    );
}

export default AdminMainPage;