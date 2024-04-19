import "./CityFilterInfo.scss";
import CustomButton from "../../../../../custom/customButton/CustomButton";
import CustomInput from "../../../../../custom/customInput/CustomInput";

function CityFilterInfo({ setCountry, setCityName }) {
  return (
    <section className="city_filter">
      <div className="city_filter_container">
        <h2 className="city_filter_label h2_text">Выберите город</h2>
        <p className="city_filter_paragraph paragraph_text">Вы можете открыть филиал сообщества в своем городе, став Mobile Broadcast Admin.
          <br /><br />Администратор - это главный двигатель филиала, он организовывает мероприятия и модерирует группу города в Телеграм.
        </p>
        <a href="https://docs.google.com/forms/d/1Oqt0y2dgP9NjVqxW3CBEaIWEPlZPKW1NmPHu_BuKYVA/viewform?edit_requested=true" target="_blank">
          <button className="city_filter_button button">Создать сообщество</button>
        </a>
      </div>
      <div className="city_filter_buttons">
        <CustomButton isFullObject={true} setValue={setCountry} type="country" defaultValue="Страна" />
        <CustomInput setText={setCityName} pl={"Поиск по названию"} />
      </div>
    </section>
  );
}

export default CityFilterInfo;
