import "./AdminUserReducPage.scss";
import { useState } from "react";
import { updateUser } from "../../../http/userApi";

function AdminUserReductPage() {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [rePassword, setRePassword] = useState();

    function setNewUserSettings() {
        if (password === rePassword) {
            try {
                updateUser(2, { login: login, password: password });
                alert("Данные успешно изменены")
            } catch (e) {

            }
        } else {
            alert("Пароли не соответствуют");
        }
    }

    return (
        <div className="admin_user_page">
            <input className="admin_user_input my_input" type="text" placeholder="Логин" onChange={(e) => setLogin(e.target.value)} />
            <input className="admin_user_input my_input" type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} />
            <input className="admin_user_input my_input" type="password" placeholder="Повторить пароль" onChange={(e) => setRePassword(e.target.value)} />
            <button className="loginPage_button button" onClick={() => setNewUserSettings()}>Изменить</button>
        </div>
    )
}

export default AdminUserReductPage;