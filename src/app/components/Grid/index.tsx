import { Posts } from "@/types/types";
import Card from "../Card";
import styles from './Grid.module.css';

type Props = {
    posts: Posts[]
}

const Grid = ({posts} : Props) =>{
    return(
        <section className={styles.grid}>
            {posts.map(posts => <Card key={posts.id} posts={posts} />)}
        </section>
    );
}

export default Grid;