import { useState, useEffect } from "react";
import { fetchAllExpertStatement } from "../../../http/sponsorStatementApi";
import StatementCard from "./statementCard/StatemnetCard";
import './AdminStatementPage.scss';

function AdminStatementPage() {
    const [sponsorsStatemnets, setSponsorsStatemnets] = useState([]);

    useEffect(() => {
        fetchAllExpertStatement().then(data => setSponsorsStatemnets(data));
    }, [])
    return (
        <section className="statement_grid">
            {(sponsorsStatemnets == String([])) ?
                <h3 className="h3_text">Страница для будущих спонсоров.</h3>
                :
                <>
                    {
                        sponsorsStatemnets.map((item, index) =>
                            <StatementCard key={index} title={item.name} description={item.link} id={item.id} />
                        )
                    }
                </>
            }
        </section >
    );
}

export default AdminStatementPage;