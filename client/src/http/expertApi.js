import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const fetchExperts = async () => {
    const { data } = await $host.get('api/expert/getAll');
    return data;
}
export const fetchOneExpert = async (id) => {
    const { data } = await $host.get('api/expert/' + id)
    return data
}
export const fetchAllMeatingByExpert = async (id) => {
    const { data } = await $host.get('api/expert/getAllExpertMeating/' + id)
    return data
}
export const createExpert = async (expert) => {
    const { data } = await $host.post('api/expert/addExpert', expert)
    return data
}

export const deleteOneExpert = async (id) => {
    if (!id) {
        return null;
    } else {
        const { data } = await $host.delete('api/expert/delete/' + id)
        return data;
    }
}
export const updateOneExpert= async (id, item) => {
    if (!id) {
        return null;
    } else {
        const { data } = await $host.put('api/expert/update/' + id, item)
        return data;
    }
}
export const deleteExpertsByCityId = async (id) => {
    if (!id) {
        return null;
    } else {
        const { data } = await $host.delete('api/expert/deleteByCityId/' + id)
        return data;
    }
}