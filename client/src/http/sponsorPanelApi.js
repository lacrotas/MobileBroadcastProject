import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const fetchSponsorPanel = async(state) => {
    const {data} = await $host.post('api/sponsorPanel/addSponsor', state)
    return data
}
export const fetchAllSponsorPanel = async () => {
    const {data} = await $host.get('api/sponsorPanel/getAllSponsprs')
    return data
}
export const fetchOneSponsorPanel = async (id) => {
    const {data} = await $host.get('api/sponsorPanel/sponsor/' + id)
    return data
}
export const deleteOneSponsorPanel = async (id) => {
    const {data} = await $host.delete('api/sponsorPanel/sponsorDelete/' + id)
    return data
}