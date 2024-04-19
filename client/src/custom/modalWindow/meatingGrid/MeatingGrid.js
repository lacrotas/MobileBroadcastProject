import MeatingCard from "./meatingCard/MeatingCard";
import { useState, useEffect } from "react";
import { fetchMeatings } from "../../../http/meatingApi";
import { fetchOneExpert, updateOneExpert } from "../../../http/expertApi";
import MeatingFilter from "../../../pages/userPages/meatingPage/components/meatingFilter/MeatingFilter";
import "./MeatingGrid.scss";

export default function MeatingGrid({ expertId }) {
    const [meatings, setMeatings] = useState([]);
    const [meatingFilter, setMeatingFilter] = useState();
    const [currentExpert, setCurrentExpert] = useState();

    useEffect(() => {
        fetchMeatings().then(data => setMeatings(data));
        fetchOneExpert(expertId).then(data => setCurrentExpert(data));
    }, []);
    function addMeatingToExpert(meatingId) {
        let newMeatngId = [];
        if (currentExpert.meatingId) {
            newMeatngId = currentExpert.meatingId.split(".");

            if (newMeatngId.includes(String(meatingId))) {
                alert("Данная встреча уже назначенна для данного эксперта");
            } else {
                newMeatngId.push(String(meatingId));
                let newString = ""
                for (let i = 0; i < newMeatngId.length; i++) {
                    newString += newMeatngId[i];
                    if (i + 1 < newMeatngId.length) {
                        newString += ".";
                    }
                }
                updateOneExpert(currentExpert.id, { meatingId: newString, image: currentExpert.image },);
                alert("Встреча добавленна к эксперту");
                window.location.reload();
            }
        } else {
            newMeatngId.push(String(meatingId));
            let newString = ""
            for (let i = 0; i < newMeatngId.length; i++) {
                newString += newMeatngId[i];
                if (i + 1 < newMeatngId.length) {
                    newString += ".";
                }
            }
            updateOneExpert(currentExpert.id, { meatingId: newString, image: currentExpert.image });
            alert("Встреча добавленна к эксперту");
            window.location.reload();
        }
    }
    return (
        <div className="meating_grid-modal">
            <MeatingFilter setMeatingFilter={setMeatingFilter} />
            {meatings &&
                <div className="grid_container">
                    {meatings.map((item, index) =>
                        <MeatingCard location={item.location} data={item.data} addMeating={addMeatingToExpert} key={index}
                            time={item.time} cityId={item.cityId} meatingFilter={meatingFilter} meatingId={item.id} />

                    )}
                </div>
            }
        </div>
    );
}