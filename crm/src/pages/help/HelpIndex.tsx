import { useHelpArticles } from "../../services/help.service"

export function HelpIndex() {

    const articles = useHelpArticles();

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