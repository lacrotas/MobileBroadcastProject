import "./AddSponsor.scss";
import { useState } from "react";
import { fetchExpertStatement } from "../../../http/sponsorStatementApi";

function AddSponsor({closeModal}) {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    function addStatement() {
        alert("Ваше заявление отправленно, мы с вами свяжемся");
        fetchExpertStatement({ name: name, link: link });
        closeModal(false);
    }
    return (
        <div className="sponsor_statement">
            <h3 className="authorizaton_label h3_text">Заявление на партнерство</h3>
            <input type="text" className="expert_statement_input my_input" placeholder="Как к вам можно обращаться?" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" className="expert_statement_input my_input" placeholder="Телеграмм/почта" value={link} onChange={(e) => setLink(e.target.value)} />
            <button className="button" onClick={() => addStatement()}>Отправить</button>
        </div>
    );
}

export default AddSponsor;