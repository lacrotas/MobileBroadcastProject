import "./ExpertGrid.scss";
import ExpertCard from "../../custom/expertCard/ExpertCard";
import { useEffect, useState } from "react";

function ExpertGrid({ expertArray, cityFilter, tehnologyFilter, nameFilter }) {
    const [experArraFiltered, setExpertsArrayFiltered] = useState(expertArray);
    useEffect(() => {
        setExpertsArrayFiltered(expertArray);
    }, [expertArray]);
    return (
        <div className="expert_grid">
            {experArraFiltered.map((item, index) => (
                <ExpertCard key={index} id={item.id} name={item.name} image={item.image}
                    technologies={item.technologies} cityId={item.cityId} cityFilter={cityFilter}
                    tehnologyFilter={tehnologyFilter} nameFilter={nameFilter} cityWithoutList={item.cityWithoutList}/>
            ))}
        </div>
    );
}

export default ExpertGrid;
