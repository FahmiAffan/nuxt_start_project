<template>
  <div>
    <Toast />
    <NuxtLayout>
      <nuxt-page>
        <router-view />
      </nuxt-page>
    </NuxtLayout>
  </div>
</template>

<script setup>
const selectLightTheme = () => {

}
</script>

<style>
@import url("~/assets/css/main.css");

</style>
