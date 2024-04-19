import CustomButton from "../../../custom/customButton/CustomButton";
import CustomInput from "../../../custom/customInput/CustomInput";

export default function AdminCitytFilter({ setCountryFilter, setNameFilter }) {

    return (
        <section className="city_filter">
            <div className="city_filter_container">
                <h2 className="city_filter_label h2_text">Выберите город</h2>
                <p className="city_filter_paragraph paragraph_text">На данной странице вы можете ознакомиться со всеми сообществами Mobile Broadcast, вы можете добавить новое сообщество или редактировать старое</p>
            </div>
            <div className="city_filter_buttons">
                <CustomButton isFullObject={true} setValue={setCountryFilter} type="country" defaultValue="Страна" />
                <CustomInput setText={setNameFilter} pl={"Поиск по названию"} />
            </div>
        </section>
    );
}