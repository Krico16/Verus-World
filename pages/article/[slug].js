const Article = ({article,categories,homepage}) => {
    return <h1>Hola</h1>
}
export default Article

/*
import { fetchAPI } from "../../lib/api"
import { getStrapiMedia } from "../../lib/media"
import Image from "../components/images"
import Layout from "../components/layout"
import Seo from '../components/seo'

const Article = ({ article, categories, homepage }) => {
    const ImageUrl = getStrapiMedia(article.image)

    const seo = {
        metaTitle: article.title,
        metaDescription: article.description,
        shareImage: article.image,
        article: true
    }

    return (
        <Layout categories={categories} links={homepage}>
            <Seo seo={seo} />
            <div className="container-fluid">
                <div className="row post-entry single-entry">
                    <article className="cArticle col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0">
                        <figure className="animate-box">
                            <Image image={article.image} />
                        </figure>
                        <span className="meta animate-box">{article.category.name}</span>
                    </article>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const articles = await fetchAPI('/articles')

    return {
        paths: articles.map((article) => ({
            params: {
                slug: article.slug
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const articles = await fetchAPI(`/articles?slug=${params.slug}&status=published`);

    const categories = await fetchAPI('/categories');

    const homepage = await fetchAPI('/homepage')

    return {
        props: { article: articles[0], categories, homepage },
        revalidate: 1
    }
}

export default Article;

*/