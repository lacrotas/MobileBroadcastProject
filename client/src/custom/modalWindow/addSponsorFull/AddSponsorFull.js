import "./AddSponsorFull.scss";
import { useState } from "react";
import { fetchSponsorPanel } from "../../../http/sponsorPanelApi";
import CustomInputFile from '../../customInputFile/CustomInputFile';

function AddSponsorFull() {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [image, setImage] = useState("");
    function addStatement() {
        if (name && image) {
            alert("Спонсор успешно добавлен");
            const formData = new FormData();
            formData.append("name", name);
            formData.append("link", link);
            formData.append("image", image.target.files[0]);
            fetchSponsorPanel(formData);
            window.location.reload();
        } else {
            alert("Заполните все поля");
        }
    }
    return (
        <div className="sponsor_statement">
            <h3 className="authorizaton_label h3_text">Добавление партнера</h3>
            <input type="text" className="expert_statement_input my_input" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" className="expert_statement_input my_input" placeholder="ссылка" value={link} onChange={(e) => setLink(e.target.value)} />
            <CustomInputFile handleImageChange={setImage} />
            <button className="button" onClick={() => addStatement()}>Отправить</button>
        </div>
    );
}

export default AddSponsorFull;