import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const fetchMeatings = async () => {
    const { data } = await $host.get('api/meating/getAllMeating');
    return data;
}
export const postMeating = async (meating) => {
    const { data } = await $host.post('api/meating/addMeating', meating);
    return data;
}

export const fetchOneMeating = async (id) => {
    if (!id) {
        return null;
    } else {
        const { data } = await $host.get('api/meating/' + id)
        return data;
    }
}

export const deleteOneMeating = async (id) => {
    if (!id) {
        return null;
    } else {
        const { data } = await $host.delete('api/meating/delete/' + id)
        return data;
    }
}
export const deleteMeatingsByCityId = async (id) => {
    if (!id) {
        return null;
    } else {
        try {
            const { data } = await $host.delete('api/meating/deleteByCityId/' + id)
            return data;
        } catch (e) { }
    }
}
export const updateOneMeating = async (id, item) => {
    if (!id) {
        return null;
    } else {
        const { data } = await $host.put('api/meating/update/' + id, item)
        return data;
    }
}