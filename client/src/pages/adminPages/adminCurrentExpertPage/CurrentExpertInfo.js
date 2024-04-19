import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchOneExpert, updateOneExpert, deleteOneExpert } from "../../../http/expertApi";
import CurrentExpertPerson from "./components/currentExpertPerson/CurrentExpertPerson";
import CurrentExpertMeatings from "./components/currentExpertMeatings/CurrentExpertMeatings";
import CurrentExpertArticles from "./components/currentExpertArticles/CurrentExpertArticles";
import "./CurrentExpertInfo.scss";
import { EXPERT_ADMIN_ROUTE } from '../../appRouter/Const';
export default function AdminCurrentExpertInfo() {
    const [expert, setExperts] = useState();
    const { id } = useParams();
    const [currentExpertPersonValues, setCurrentExpertPersonValues] = useState();
    const [isUpdated, setIsUpdated] = useState(false);

    const history = useHistory();

    useEffect(() => {
        if (!expert) {
            fetchOneExpert(id).then(data => setExperts(data));
        }
        if (expert && !isUpdated) {
            setCurrentExpertPersonValues({
                name: expert.name, image: expert.image, aboutText: expert.aboutText,
                sex: expert.sex, technologies: expert.technologies.split("/"), cityId: expert.cityId,
                linkTelegram: expert.linkTelegram, linkMail: expert.linkMail
            })
            setIsUpdated(true);
        }
    }, [expert]);

    function updateExpert(currentExpert) {
        const formData = new FormData();
        formData.append('name', currentExpert.name);
        formData.append('sex', currentExpert.sex);
        formData.append('aboutText', currentExpert.aboutText);
        formData.append('image', currentExpert.image);
        formData.append('technologies', currentExpert.technologies.join('/'));
        if (currentExpert.cityId) {
            formData.append('cityId', currentExpert.cityId.id);
            formData.append('cityWithoutList', undefined);
        } else {
            formData.append('cityWithoutList', currentExpert.cityWithoutList);
            formData.append('cityId', undefined);
        }
        if (currentExpert.linkTelegram) {
            formData.append('linkTelegram', currentExpert.linkTelegram);
        }
        if (currentExpert.linkMail) {
            formData.append('linkMail', currentExpert.linkMail);
        }
        if (currentExpert.linkGitHab) {
            formData.append('linkGitHab', currentExpert.linkGitHab);
        }
        if (currentExpert.linkLinkedIn) {
            formData.append('linkLinkedIn', currentExpert.linkLinkedIn);
        }
        updateOneExpert(expert.id, formData);
        alert("Эксперт отредактирован");

        window.location.reload();
    }
    function deleteExpert() {
        const result = prompt("Для удаления эксперта введите слово \"да\"", []);
        if (result === "да") {
            deleteOneExpert(id);
            alert("Эксперт удален");
            history.push(EXPERT_ADMIN_ROUTE);
        }
    }
    return (
        <div>
            {expert ?
                <>
                    <CurrentExpertPerson name={expert.name} image={expert.image} aboutText={expert.aboutText}
                        sex={expert.sex} technologies={expert.technologies} cityId={expert.cityId}
                        linkTelegram={expert.linkTelegram} linkMail={expert.linkMail}
                        setCurrentExpertPersonValues={setCurrentExpertPersonValues} updateExpert={updateExpert} deleteExpert={deleteExpert}
                        linkGitHab={expert.linkGitHab} linkLinkedIn={expert.linkLinkedIn} cityWithoutList={expert.cityWithoutList} />
                    <CurrentExpertArticles expertId={expert.id} />
                    <CurrentExpertMeatings id={expert.meatingId} expertImage={expert.image} expertId={expert.id} />
                </>
                : <></>}
        </div>
    );
}