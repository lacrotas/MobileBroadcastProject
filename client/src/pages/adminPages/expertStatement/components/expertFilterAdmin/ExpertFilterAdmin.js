import "./ExpertFilterAdmin.scss";
import CustomButton from "../../../../../custom/customButton/CustomButton";

function ExpertFilterAdmin() {
    return (
        <section className="expert_filter">
            <div className="expert_filter_container">
                <h2 className="expert_filter_label h2_text">Заявления экспертов</h2>
                <p className="expert_filter_paragraph paragraph_text">Даннная страница содержит заявления на экспертов, вы можете одобрить или отклонить их</p>
            </div>
            <CustomButton text="Город" />
            <CustomButton text="Технология" />
        </section>
    );
}

export default ExpertFilterAdmin;
