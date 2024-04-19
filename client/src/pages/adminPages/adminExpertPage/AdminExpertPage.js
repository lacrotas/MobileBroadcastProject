import CurrentExpertPerson from "./currentExpertPerson/CurrentExpertPerson";
import { useEffect, useState } from "react";
import { fetchExperts } from "../../../http/expertApi";
import ExpertCard from "../../../custom/expertCard/ExpertCard";
import CustomButton from "../../../custom/customButton/CustomButton";
import CustomInput from "../../../custom/customInput/CustomInput";
import "./AdminExpertPage.scss";

export default function AdminExpertPage() {
    const [experts, setExperts] = useState();
    /*filters */
    const [cityFilter, setCityFilter] = useState();
    const [nameFilter, setNameFilter] = useState();
    const [tehnologyFilter, setTehnologyFilter] = useState();
    /* creating page*/
    const [creatingExpert, setCreatingExpert] = useState(false);

    useEffect(() => {
        fetchExperts().then(data => setExperts(data));
    }, []);

    return (
        <>
            {!creatingExpert ?
                < div >
                    <section className="expert_filter">
                        <div className="expert_filter_container">
                            <h2 className="expert_filter_label h2_text">Эксперты</h2>
                            <p className="expert_filter_paragraph paragraph_text">На данной странице отображены все эксперты Mobile Broadcast: вы можете добавлять, редактировать и удалять экспертов</p>
                        </div>
                        <div className="expert_filter_buttons">
                            <CustomButton setValue={setTehnologyFilter} type="tehnology" defaultValue="Технология" />
                            <CustomInput pl={"Поиск по городам"} setText={setCityFilter} />
                            <CustomInput pl={"Поиск по ФИО"} setText={setNameFilter} />
                        </div>
                    </section>
                    <section className="expert_grid">
                        <>{(experts)
                            ? <>
                                {experts.map((item, index) => (
                                    <ExpertCard isAdmin={true} key={index} id={item.id} name={item.name} image={item.image}
                                        technologies={item.technologies} cityId={item.cityId} cityFilter={cityFilter}
                                        tehnologyFilter={tehnologyFilter} nameFilter={nameFilter} cityWithoutList={item.cityWithoutList} />
                                ))}
                                <button className="button" onClick={() => setCreatingExpert("create")}>Добавить эксперта</button>
                            </>
                            :
                            <div>
                                <h3>На данный момент встречь не назначенно</h3>
                                <button className="button" onClick={() => setCreatingExpert("create")}>Добавить встречу</button>
                            </div>
                        }
                        </>
                    </section>
                </div >
                :
                <CurrentExpertPerson setBack={creatingExpert} />
            }
        </>
    )
}