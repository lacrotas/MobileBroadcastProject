import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const fetchAllCreatorsByCityId = async (cityId) => {
    const { data } = await $host.get('api/creator/getAllByCityId/' + cityId)
    return data
}
export const fetchCreatorsById = async (id) => {
    const { data } = await $host.get('api/creator/get/' + id)
    return data
}
export const postCreator = async (item) => {
    const { data } = await $host.post('api/creator/addCreator', item)
    return data
}
export const updateOneCreator = async (id, item) => {
    if (!id) {
        return null;
    } else {
        const { data } = await $host.put('api/creator/update/' + id, item)
        return data;
    }
}
export const deleteCreatorById = async (id) => {
    const { data } = await $host.delete('api/creator/delete/' + id)
    return data
}
export const deleteAllCreatorsByCityId = async (id) => {
    const { data } = await $host.delete('api/creator/deleteByCityId/' + id)
    return data
}