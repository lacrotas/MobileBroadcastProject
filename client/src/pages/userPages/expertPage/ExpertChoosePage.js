import { useContext, useEffect, useState } from "react";
import ExpertFilter from "./components/expertFilter/ExpertFilter";
import ExpertGrid from "../../../components/expertGrid/ExpertGrid";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";
import { fetchExperts } from "../../../http/expertApi";

const ExpertChoosePage = observer(() => {
    const [cityFilter, setCityFilter] = useState();
    const [tehnologyFilter, setTehnologyFilter] = useState();
    const [nameFilter, setNameFilter] = useState();
    const { expert } = useContext(Context);
    useEffect(() => {
        fetchExperts().then(data => expert.setExperts(data));
    }, []);

    return (
        <div className="city_choose_page">
            <ExpertFilter setCityFilter={setCityFilter} setTehnologyFilter={setTehnologyFilter} setNameFilter={setNameFilter} />
            <ExpertGrid expertArray={expert._experts} cityFilter={cityFilter} tehnologyFilter={tehnologyFilter} nameFilter={nameFilter} />
        </div>
    );
})

export default ExpertChoosePage;
