import { useState, useEffect } from "react"
import { fetchArticlesByExpertId } from "../../../../../http/articlesApi";
import "./CurrentExpertArticles.scss";
import WordImage from "../../../../../assets/images/wordIcon.svg";

function CurrentExpertArticles({ expertId }) {
    const [articles, setArticles] = useState();


    useEffect(() => {
        if (!articles) {
            fetchArticlesByExpertId(expertId).then(data => setArticles(data));
        }
    }, [articles]);
    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }
    return (
        <section className="current_articles">
            <h3 className="h3_text">Статьи</h3>
            {(articles && articles.length != 0) ?
                <div className="current_articles_grid">{
                    articles.map((item, index) => (

                        <div className="articles_container_item-ready" key={index}>
                            {item.file ?
                                <a className="ready_item_link" href={process.env.REACT_APP_API_URL + item.file}>
                                    <img src={WordImage} alt="image" />
                                    <p className="paragraph_text">{item.name}</p>
                                </a>
                                :
                                <a className="ready_item_link" target="_blank" href={isValidUrl(item.link) ? item.link : "/"}>
                                    <img src={WordImage} alt="image" />
                                    <p className="paragraph_text">{item.name}</p>
                                </a>
                            }
                        </div>
                    ))
                }</div>
                :
                <p className="paragraph_text">У данного эксперта нет статей</p>
            }
        </section>
    )
}
export default CurrentExpertArticles