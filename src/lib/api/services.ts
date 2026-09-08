import { Posts } from "@/types/types";
import Crud_Api from "./axios";

export function getTrendindPost(): Promise<Posts[]>;
export function getTrendindPost(id: number): Promise<Posts | undefined>;
export async function getTrendindPost(id?: number) {
    const res = await Crud_Api.get<Posts[]>("/Tarefa");

    if (id === undefined) {
        return res.data;
    }

    return res.data.find((post) => post.id === id);
}