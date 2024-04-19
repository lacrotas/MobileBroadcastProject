import "./Authorization.scss";
import { registration, signIn } from "../../../http/userApi";
import { useContext, useState } from "react";
import { Context } from "../../../index";
import { EXPERT_ADMIN_ROUTE } from "../../../pages/appRouter/Const";
import { observer } from "mobx-react-lite";

const Authorization = observer(({ closeModal }) => {
    const { user } = useContext(Context);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const auth = async () => {
        try {
            const response = await signIn(login, password);
            console.log("work")
            user.setUser(user);
            user.setIsAuth(true);
            closeModal(false);
        } catch (e) {
            alert("Неправильный логин или пароль");
        }
    }

    return (
        <div className="authorizaton">
            <h3 className="authorizaton_label h3_text">Авторизация</h3>
            <input type="text" className="authorizaton_input paragraph_text" placeholder="Логин"
                value={login} onChange={(e) => setLogin(e.target.value)} />
            <input type="password" className="authorizaton_input paragraph_text" placeholder="Пароль"
                value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="authorizaton_button button" onClick={() => auth()}>Войти</button>
        </div>
    );
});

export default Authorization;