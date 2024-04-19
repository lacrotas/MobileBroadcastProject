import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const fetchArticlesByExpertId = async (id) => {
    const { data } = await $host.get('api/articles/getAll/' + id);
    return data;
}
export const createOneArticle = async (article) => {
    const { data } = await $host.post('api/articles/addArticle', article);
    return data
}

export const deleteOneArticle = async (id) => {
    if (!id) {
        return null;
    } else {
        const { data } = await $host.delete('api/articles/deleteArticle/' + id)
        return data;
    }
}
export const updateOneExpert = async (id, item) => {
    if (!id) {
        return null;
    } else {
        const { data } = await $host.put('api/articles/update/' + id, item)
        return data;
    }
}