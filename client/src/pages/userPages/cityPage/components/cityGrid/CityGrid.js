import "./CityGrid.scss";
import CITYIMAGE from "../../../../../base/CITYIMAGE.js";
import CityCard from "../../../../../custom/cityCard/CityCard.js";

function CityGrid() {
  return (
    <div className="city_grid">
      {CITYIMAGE.map((url, index) => (
        <CityCard key={index} img={url} />
      ))}
    </div>
  );
}

export default CityGrid;
