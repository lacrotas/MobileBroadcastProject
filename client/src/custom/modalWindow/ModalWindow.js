import Authorization from "./authorization/Authorization";
import AddExpert from "./addExpert/AddExpert";
import Map from "../../components/map/Map";
import "./ModalWindow.scss";
import MeatingInfo from "./meatingInfo/MeatingInfo";
import MeatingGrid from "./meatingGrid/MeatingGrid";
import AddSponsor from "./addSponsor/AddSponsor";
import AddSponsorFull from "./addSponsorFull/AddSponsorFull";

function ModalWindow({ type, closeModal, creatorId, cityId, svgClass, item, isReduct, nameValue, telegramValue, mailValue, imageValue, expertId}) {

    return (
        <div className="modal_window">
            {(type == "auth") && <Authorization closeModal={closeModal} />}
            {(type == "addExpert") && <AddExpert isReduct={isReduct} nameValue={nameValue}
                telegramValue={telegramValue} mailValue={mailValue} imageValue={imageValue}
                cityId={cityId} closeModal={closeModal} creatorId={creatorId} />}
            {(type == "map") && <Map svgClass={svgClass} />}
            {(type == "meating") && <MeatingInfo item={item} />}
            {(type == "meating_grid") && <MeatingGrid expertId={expertId} />}
            {(type == "addSponsor") && <AddSponsor closeModal={closeModal} />}
            {(type == "addSponsorFull") && <AddSponsorFull closeModal={closeModal} />}
            <div className="modal_window-back" onClick={() => closeModal(false)}></div>
        </div>
    );
}

export default ModalWindow;