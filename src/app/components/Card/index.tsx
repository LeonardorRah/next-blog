import { Posts } from "@/types/types";
import styles from './Card.module.css';
import Link from "next/link";

type Props = {
    posts : Posts
}
const Card = ({posts} : Props) => {
    const {id, title, imagem, description} = posts;
    const resume = description?.length >= 256 ? `${description?.substring(0,200)}...` : description;
    return(
        <div key={id} className={styles.card}>
            <Link href={`/livros/${id}`}>
                <img 
                    src={imagem} 
                    alt={`Foto do assunto ${title}`}
                    className={styles.image}
                    width={300} 
                    height={200}
                />
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{resume}</p>
                </div>
            </Link>
        </div>
    );
}
export default Card;