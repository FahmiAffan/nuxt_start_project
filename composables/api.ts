import { useNuxtApp } from "#app"

export const api = () => {
    const { $axios } = useNuxtApp()
    // const get = async (endpoint: string) => {
    //     return await $axios.get(endpoint);
    // }
    // const post = async (endpoint: string, body: Object) => {
    //     return await $axios.post(endpoint, body);
    // }

    // return { get, post }
    return $axios
}

export default api;