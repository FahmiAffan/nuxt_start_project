import axios from "axios"
import Toast from 'primevue/toast';


export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();
    let axiosConfig = axios.create({
        baseURL: config.public.API_BASE_URL,
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: false,
        withXSRFToken: true,
    });
    axiosConfig.interceptors.request.use(function (response) {
        let token = useCookie('token');
        if (token) {
            response.headers['Authorization'] = `Bearer ${token.value}`
        }
        return response;
    }, function (error) {
        return Promise.reject(error);
    });

    axiosConfig.interceptors.response.use(function (response) {
        if (response.status == 201) {
            useNuxtApp().$toast.add({ severity: "success", summary: 'Success', detail: response.data.message, life: 3000 })
        }
        return response;
    }, function (error) {
        if (error) {
            useNuxtApp().$toast.add({ severity: "error", summary: 'Error', detail: error.response.data.error, life: 3000 })
        }
        // return error
        return Promise.reject(error);
    });

    return {
        provide: {
            axios: axiosConfig
        }
    }
})