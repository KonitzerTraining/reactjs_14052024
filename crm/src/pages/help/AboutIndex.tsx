import { useEffect, useState } from "react";
import { helpService } from "../../services/help.service"
import type { HelpArticle } from "../../model/HelpArticle"

export function HelpIndex() {
    console.log('test');
    const [articles, setArticles] = useState<HelpArticle[]>([]);

    useEffect(() => {
        helpService.getAll().then((articles) => {
            setArticles(articles);
        });
    }, []);

    return (
        <>
            <h1>Help</h1>
            {/* {JSON.stringify(articles)} */}


            {articles.map((article) => {
                return (
                    <article key={article.id}>
                        <h3>{article.topic}</h3>
                        <p>{article.content}</p>
                    </article>
                )
            })}

        </>
    )
}