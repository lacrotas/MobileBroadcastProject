import { useState, useEffect } from "react"
import "./CurrentExpertMeatings.scss"
import MeatingCard from "../../../../../custom/modalWindow/meatingGrid/meatingCard/MeatingCard";
import { fetchAllMeatingByExpert, updateOneExpert } from "../../../../../http/expertApi";
import ModalWindow from "../../../../../custom/modalWindow/ModalWindow";

function CurrentExpertMeatings({ id, expertImage, expertId }) {
    const [meatings, setMeatings] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        if (id !== null && id !== "") {
            fetchAllMeatingByExpert(id === null ? -1 : id).then(data => setMeatings(data));
        }
    }, []);

    function deleteMeatingToExpert(meatingId) {
        let newMeatngId = id.split(".");
        if (newMeatngId.includes(String(meatingId))) {
            newMeatngId.splice(newMeatngId.indexOf(String(meatingId)), 1);
            updateOneExpert(expertId, { meatingId: newMeatngId.join('.'), image: expertImage });
            alert("Данная встреча удаленная для эксперта");
            window.location.reload();
        } else {
            alert("Встреча уже удаленна");
        }
    }
    return (
        <section className="current_meating">
            <h3 className="h3_text">Ближайшие встречи</h3>
            {meatings != String([]) ?
                <section className="meating_grid">
                    {meatings.map((item, index) => (
                        <MeatingCard key={index} location={item.location} meatingId={item.id}
                            data={item.data} time={item.time} cityId={item.cityId} isDelete={true} deleteMeating={deleteMeatingToExpert} />
                    ))}
                    <button className="button" onClick={() => setIsModalOpen(true)}>Назначить встречу</button>
                </section>
                :
                <>
                    <p className="current_meating_paragraph_text paragraph_text">У данного эксперта не запланированно встреч</p>
                    <button className="current_meating_paragraph_text button" onClick={() => setIsModalOpen(true)}>Назначить встречу</button>
                </>
            }
            {isModalOpen &&
                <ModalWindow type={"meating_grid"} closeModal={setIsModalOpen} expertId={expertId} />
            }
        </section>
    )
}
export default CurrentExpertMeatings