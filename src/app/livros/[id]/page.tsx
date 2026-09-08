import Link from "next/link";
import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";
import styles from "./DetalheLivro.module.css"
import { getTrendindPost } from "@/lib/api/services";

export const dynamic = 'force-static';

type Props = {
    params : Promise<{
        id:number
    }>
}

export const generateMetadata = async({ params } : Props) => {
    const { id } = await params;

    const details = await getTrendindPost(id);

    if(!details)
        return;

    return {
        openGraph: {
            title: `${details.title} | Blog`,
            description: details.description,
            images:[`imagem`]
        }
    }
}

const DetalheLivro = async ({ params } : Props) => {
    const { id } = await params;
    
    const details = posts.find(posts => posts.id == id);

    if(!details)
        return notFound();

    const { author, title, imagem, description, date} = details;

    return (
        <>
            <div className={styles.container}>
                <Link href="/" className={styles.backLink}>Voltar</Link>
                <section className={styles.content}>
                    <figure className={styles.imageWrapper}>
                        <img src={imagem} alt={`Capa do Livro: ${title}`} className={styles.bookImage} />
                    </figure>
                    <article>
                        <h2 className={styles.bookTitle}>{title}</h2>
                        <h3 className={styles.bookTitle}>Autor: {author}</h3>
                        <p className={styles.bookInfo}>{description}</p>
                        <p className={styles.bookTitle}>{date}</p>
                    </article>
                </section>
            </div>
        </>
    )
}

export default DetalheLivro;