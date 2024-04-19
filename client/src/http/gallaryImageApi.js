import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const fetchAllGallaryImageByCityId = async (id) => {
    const { data } = await $host.get('api/gallaryImage/getAllImage/' + id)
    return data
}
export const postGallaryImage = async (image) => {
    const { data } = await $host.post('api/gallaryImage/addImage', image)
    return data
}
export const deleteGallatyImageById = async (id) => {
    const { data } = await $host.delete('api/gallaryImage/deleteImage/' + id)
    return data
}
export const deleteAllGallatyImageByCityId = async (id) => {
    const { data } = await $host.delete('api/gallaryImage/deleteAllImage/' + id)
    return data
}