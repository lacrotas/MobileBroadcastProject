import { useState, useEffect } from "react"
import "./CurrentExpertMeatings.scss"
import MeatingCard from "../../../../../custom/meatingCard/MeatingCard";
import { fetchOneMeating } from "../../../../../http/meatingApi";

function CurrentExpertMeatings({ id }) {
    const [allMeatings, setAllMeatings] = useState();

    useEffect(() => {
        fetchOneMeating(id).then(data => setAllMeatings(data))
    }, []);

    return (
        <section className="current_meating">
            <h3 className="h3_text">Ближайшие встречи</h3>
            {allMeatings ?
                <section className="meating_grid">
                    {allMeatings.map((item, index) => (
                        <MeatingCard key={index} location={item.location}
                            data={item.data} time={item.time} cityId={item.cityId} />
                    ))}
                </section>
                :
                <p className="current_meating_paragraph_text paragraph_text">У данного эксперта не запланированно встреч</p>
            }
        </section>
    )
}
export default CurrentExpertMeatings