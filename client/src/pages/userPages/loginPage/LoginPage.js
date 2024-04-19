import { useState, useContext } from "react";
import { signIn } from "../../../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import "./LoginPage.scss";
import { useHistory } from 'react-router-dom';

const LoginPage = observer(() => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const { user } = useContext(Context);
    const history = useHistory();
    const auth = async () => {
        try {
            const response = await signIn(login, password);
            user.setUser(user);
            user.setIsAuth(true);
            history.push('/');
            window.location.reload();
        } catch (e) {
            alert("Неправильный логин или пароль");
        }
    }
    return (
        <div className="loginPage">
            <h3 className="loginPage_label h3_text">Авторизация</h3>
            <input type="text" className="loginPage_input paragraph_text my_input" placeholder="Логин"
                value={login} onChange={(e) => setLogin(e.target.value)} />
            <input type="password" className="loginPage_input paragraph_text my_input" placeholder="Пароль"
                value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="loginPage_button button" onClick={() => auth()}>Войти</button>
        </div>
    );
});

export default LoginPage;