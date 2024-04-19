import { useContext, useEffect, useState } from "react";
import MeatingFilter from "./components/meatingFilter/MeatingFilter";
import MeatingGrid from "./components/meatingGrid/MeatingGrid";
import { Context } from "../../../index";
import { fetchMeatings } from "../../../http/meatingApi";
import { observer } from "mobx-react-lite";

const MeatingPage = observer(() => {
  const { meatings } = useContext(Context);
  const [meatingFilter, setMeatingFilter] = useState();

  useEffect(() => {
    fetchMeatings().then(data => meatings.setMeating(data));
  }, []);

  return (
    <div className="meating_page">
      <MeatingFilter setMeatingFilter={setMeatingFilter} />
      <MeatingGrid meatingFilter={meatingFilter} meatings={meatings._meating} />
    </div>
  );
})

export default MeatingPage;
