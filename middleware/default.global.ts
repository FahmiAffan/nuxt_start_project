export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('token');
    if (token.value == null && to.name != 'login') {
        return navigateTo('/login');
    }
    if (token.value != null && from.name == 'login') {
        return abortNavigation;
    }
})