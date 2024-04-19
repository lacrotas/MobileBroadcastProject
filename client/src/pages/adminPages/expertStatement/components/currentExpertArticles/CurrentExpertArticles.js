import { useState, useEffect } from "react"
import "./CurrentExpertArticles.scss";

function CurrentExpertArticles({ articles }) {
    const [articlesArr, setArticlesArr] = useState();

    // useEffect(() => {
    //     fetchOneCity(articles).then(data => setArticlesArr(data));
    // }, []);

    return (
        <section className="current_articles">
            <h3 className="h3_text">Статьи</h3>
            {articlesArr ?
                <></>
                :
                <p className="paragraph_text">У данного эксперта нету статей</p>
            }
        </section>
    )
}
export default CurrentExpertArticles