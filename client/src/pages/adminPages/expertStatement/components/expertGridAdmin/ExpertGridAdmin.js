import "./ExpertGridAdmin.scss";
import ExpertCardStatement from "./expertCardStatement/ExpertCardStatement";

const expertStatements = [
    { name: "Иванов Иван Иванович", city: "Минск", link: ["telega", "mail"], technology: ["Java", "Kotlin"], about: "таоуцташц ащауатуат щйтацтмиокук цуашоошщо" },
    { name: "Иванов Семен Иванович", city: "Омск", link: ["telega", "mail"], technology: ["IOS"], about: "таоуц ташцащау атуатщйта цтмиокук цуашоошщо" },
    { name: "Иванов Николай Иванович", city: "Гродно", link: ["telega", "mail"], technology: ["Android"], about: "таоуцт ашцащауат уатщй тацтмиокук цуашоошщо" },
]

function ExpertGridAdmin() {
    return (
        <div className="expert_grid_admin">
            {expertStatements.map((item, index) => (
                <ExpertCardStatement key={index} name={item.name}
                    city={item.city} link={item.link} technology={item.technology} about={item.about} />
            ))}
        </div>
    );
}

export default ExpertGridAdmin;
