import "./CustomInput.scss";
import SearchImage from "../../assets/images/find.svg";

function CustomInput({ pl, setText }) {
    return (
        <div className="custom_input-container">
            <input className="custom_input" type="text" placeholder={pl} onChange={(e) => setText(e.target.value)} />
            <img className="custom_image" src={SearchImage} alt="find" />
        </div>
    );
}

export default CustomInput;
