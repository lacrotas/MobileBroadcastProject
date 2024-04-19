import { fetchAllExpertStatement } from "../../../http/expertsStatementApi";
import { useEffect, useContext } from "react";
import CurrentExpertPerson from "./components/currentExpertPerson/CurrentExpertPerson";
import "./ExpertStatementPage.scss";

const ExpertStatementPage = () => {
    return (
        <section className="expert_statement_page">
            <CurrentExpertPerson />
            <div className="expert_statement_page_save">
                <button className="button">Применить изменения</button>
            </div>
        </section>
    );
}

export default ExpertStatementPage;