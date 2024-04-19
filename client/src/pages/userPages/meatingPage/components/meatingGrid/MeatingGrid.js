import "./MeatingGrid.scss";
import MeatingCard from "../../../../../custom/meatingCard/MeatingCard";

function MeatingGrid({ meatingFilter, meatings }) {
    return (
        <section className="meating_grid">
            <>{(meatings)
                ?
                meatings.map((item, index) => (
                    <MeatingCard key={index} location={item.location}
                        data={item.data} time={item.time} cityId={item.cityId} meatingFilter={meatingFilter} />
                ))
                :
                <h3>На данный момент встречь не назначенно</h3>
            }
            </>
        </section>
    );
}

export default MeatingGrid;
