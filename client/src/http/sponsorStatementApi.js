import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const fetchExpertStatement = async(state) => {
    const {data} = await $host.post('api/sponsorStatement/addStatement', state)
    return data
}
export const fetchAllExpertStatement = async () => {
    const {data} = await $host.get('api/sponsorStatement/getAllStatement')
    return data
}
export const fetchOneExpertStatement = async (id) => {
    const {data} = await $host.get('api/sponsorStatement/statement/' + id)
    return data
}
export const deleteOneExpertStatement = async (id) => {
    const {data} = await $host.delete('api/sponsorStatement/statementDelete/' + id)
    return data
}