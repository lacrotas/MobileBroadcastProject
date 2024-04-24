import MainInfo from "../../components/mainInfo/MainInfo";
import AnhorGrid from "../../components/anhorGrid/AnhorGrid";
import Sponsors from "../../components/sponsors/Sponsors";
import SliderMain from "./sliderMain/SliderMain";
import SLIDER from "../../base/SLIDER";
function MainPage() {
  return (
    <div className="main_page">
      <MainInfo />
      <AnhorGrid />
      <SliderMain imgArr={SLIDER} />
      <Sponsors />
    </div>
  );
}

export default MainPage;
