import './AdminSponsorPage.scss';
import SponsorCard from "./sponsorCard/SponsorCard";
import { useState, useEffect } from 'react';
import { fetchAllSponsorPanel } from '../../../http/sponsorPanelApi';
import ModalWindow from '../../../custom/modalWindow/ModalWindow';

export default function AdminSponsorPage() {
    const [sponsorsStatemnets, setSponsorsStatemnets] = useState([]);
    const [isModalOpen, setIsmodalOpen] = useState(false);

    useEffect(() => {
        fetchAllSponsorPanel().then(data => setSponsorsStatemnets(data));
    }, [])

    return (
        <section className="adminSponsor">
            {
                sponsorsStatemnets.map((item, index) =>
                    <SponsorCard key={index} title={item.name} description={item.link} id={item.id} image={item.image} />
                )
            }
            <button className="button" onClick={() => setIsmodalOpen(true)}>Добавить партнера</button>
            {isModalOpen &&
                <ModalWindow type={'addSponsorFull'} closeModal={setIsmodalOpen} />
            }
        </section>
    )
}