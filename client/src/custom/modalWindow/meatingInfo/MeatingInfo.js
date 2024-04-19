import { useState } from "react"
import "./MeatingInfo.scss";

export default function MeatingInfo({ item }) {
    const [location, setLocation] = useState(item.location);
    const [time, setTime] = useState(item.location);
    return (
        <div className="meating_info">
            <input type="text" className="my_input" value={location} onChange={(e) => setLocation(e.target.value)} />
            {/* <input type="data" className="my_input" value={item.data} /> */}
            <input type="time" className="my_input" value={time} onChange={(e) => setTime(e.target.value)} />
            <p>{item.cityId}</p>
        </div>
    )
}