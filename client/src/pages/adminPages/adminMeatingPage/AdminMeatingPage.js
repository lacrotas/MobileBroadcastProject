import AddMeating from "./addMeating/AddMeating";
import MeatingFilter from "../../userPages/meatingPage/components/meatingFilter/MeatingFilter";
import { useEffect, useState } from "react";
import { fetchMeatings } from "../../../http/meatingApi";
import MeatingCard from "../../../custom/meatingCard/MeatingCard";
import ModalWindow from "../../../custom/modalWindow/ModalWindow";
import "./AdminMeatingPage.scss";

{/* {choosenMeating && <ModalWindow type="meating" closeModal={setChoosenMeating} item={choosenMeating} />} */ }

export default function AdminMeatingPage() {
    const [meatings, setMeatings] = useState();
    const [choosenMeating, setChoosenMeating] = useState(false);
    const [meatingFilter, setMeatingFilter] = useState();

    useEffect(() => {
        fetchMeatings().then(data => setMeatings(data));
    }, []);
    return (
        <>
            {!choosenMeating ?
                < div >
                    <MeatingFilter setMeatingFilter={setMeatingFilter} />
                    <section className="meating_grid">
                        <>{(meatings)
                            ? <>
                                {meatings.map((item, index) => (
                                    <div key={index} onClick={() => setChoosenMeating(item)}>
                                        <MeatingCard location={item.location}
                                            data={item.data} time={item.time} cityId={item.cityId} meatingFilter={meatingFilter} />
                                    </div>
                                ))}
                                <button className="button" onClick={() => setChoosenMeating("create")}>Добавить встречу</button>
                            </>
                            :
                            <div>
                                <h3>На данный момент встречь не назначенно</h3>
                                <button className="button" onClick={() => setChoosenMeating("create")}>Добавить встречу</button>
                            </div>
                        }
                        </>
                    </section>
                </div >
                :
                <AddMeating item={choosenMeating} setBack={setChoosenMeating} />
            }
        </>
    )
}