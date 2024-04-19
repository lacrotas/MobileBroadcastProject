import "./ExpertFilter.scss";
import CustomButton from "../../../../../custom/customButton/CustomButton";
import CustomInput from "../../../../../custom/customInput/CustomInput";

function ExpertFilter({ setCityFilter, setTehnologyFilter, setNameFilter }) {

    return (
        <section className="expert_filter">
            <div className="expert_filter_container">
                <h2 className="expert_filter_label h2_text">Эксперты</h2>
                <p className="expert_filter_paragraph paragraph_text">Станьте одним из экспертов по мобильной разработке iOS, Android, Kotlin, Аврора и других кроссплатформ.
                    <br /><br />Каждый из экспертов отвечает за определённое направление, активно участвует в его развитии и популяризации, а также делится своей экспертизой с участниками нашего сообщества.</p>
                <a href="https://docs.google.com/forms/d/1o-GCn8g4oWgs_-ZML2YijOBzp9yxjJjWwIy_ie6W-ow/viewform?ts=65637ba7&edit_requested=true" target="_blank">
                    <button className="expert_filter_button button">Подать заявление</button>
                </a>
            </div>
            <div className="expert_filter_buttons">
                <CustomButton setValue={setTehnologyFilter} type="tehnology" defaultValue="Технология" />
                <CustomInput pl={"Поиск по городам"} setText={setCityFilter} />
                <CustomInput pl={"Поиск по ФИО"} setText={setNameFilter} />
            </div>
        </section >
    );
}

export default ExpertFilter;
