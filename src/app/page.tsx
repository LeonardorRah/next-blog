import Title from "./components/Title";
import Grid from "./components/Grid";
import { getTrendindPost } from "@/lib/api/services";

export default async function Home() {
  const posts = await getTrendindPost();
  return (
    <>
    <Title title="Melhores Livros" />
    <Grid posts={posts}/>
    </>
  );
}