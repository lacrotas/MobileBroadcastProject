import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchOneExpert } from "../../../http/expertApi";
import CurrentExpertPerson from "./components/currentExpertPerson/CurrentExpertPerson";
import CurrentExpertMeatings from "./components/currentExpertMeatings/CurrentExpertMeatings";
import CurrentExpertArticles from "./components/currentExpertArticles/CurrentExpertArticles";

function CurrentExpertInfo() {
    const [expert, setExperts] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetchOneExpert(id).then(data => setExperts(data));
    }, []);
    return (
        <div>
            {expert ?
                <>
                    <CurrentExpertPerson name={expert.name} image={expert.image} aboutText={expert.aboutText}
                        sex={expert.sex} technologies={expert.technologies} cityId={expert.cityId}
                        linkTelegram={expert.linkTelegram} linkMail={expert.linkMail}
                        linkGitHub={expert.linkGitHab} linkLinkedIn={expert.linkLinkedIn} cityWithoutList={expert.cityWithoutList}/>
                    <CurrentExpertArticles expertId={expert.id} />
                    <CurrentExpertMeatings id={expert.meatingId} />
                </>
                : <></>}
        </div>
    );
}

export default CurrentExpertInfo;