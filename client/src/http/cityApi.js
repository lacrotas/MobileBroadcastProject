import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const fetchCityes = async () => {
    const { data } = await $host.get('api/city/getAllCity');
    return data;
}
export const fetchOneCity = async (id) => {
    const { data } = await $host.get('api/city/' + id)
    return data
}
export const fetchAllCityByContry = async (id) => {
    const { data } = await $host.get('api/city/getAllCityByContry/' + id)
    return data
}
export const createCity = async (city) => {
    const { data } = await $host.post('api/city/addCity', city)
    return data
}
export const deleteOneCity = async (id) => {
    if (!id) {
        return null;
    } else {
        const { data } = await $host.delete('api/city/delete/' + id)
        return data;
    }
}
export const updateOneCity = async (id, item) => {
    if (!id) {
        return null;
    } else {
        const { data } = await $host.put('api/city/update/' + id, item)
        return data;
    }
}
/*country*/
export const createCountry = async (country) => {
    const { data } = await $host.post('api/country/addCountry', country)
    return data
}
export const fetchCountries = async () => {
    const { data } = await $host.get('api/country/getAllCountry')
    return data
}
export const deleteOneCountry = async (id) => {
    if (!id) {
        return null;
    } else {
        const { data } = await $host.delete('api/country/deleteCountry/' + id)
        return data;
    }
}
export const updateOneCountry = async (id, item) => {
    if (!id) {
        return null;
    } else {
        const { data } = await $host.put('api/country/updateCountry/' + id, item)
        return data;
    }
}