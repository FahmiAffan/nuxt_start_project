<template>
  <div class="flex h-[100vh] justify-center items-center futura">
    <Card class="w-[414px] rounded-[10px] dark:bg-white">
      <template #content>
        <h1 class="text-[24px] text-[#000000] font-medium text-left pb-[23px]">
          <Image
            class="pl-2"
            src="_nuxt/assets/image/misty-icon-2.svg"
            alt=""
          ></Image>
        </h1>
        <form @submit.prevent="Submit()" class="flex flex-col">
          <h1 class="text-[#000000] font-bold text-[24px]">Forgot Password</h1>
          <p class="text-[#000000] font-bold text-[13px] opacity-30 pb-[15px]">
            Let us know your email
          </p>
          <label for="email" class="text-[#000000] font-semibold text-[12px]"
            >Username or email</label
          >
          <InputText
            type="email"
            variant="filled"
            v-model="form.email"
            class="mb-[22px] h-[51px]"
            placeholder="example@gmail.com"
            id="email"
          />

          <Button
            type="submit"
            class="h-[51px] text-[#7E30E1] hover:bg-[#994DF6]"
          >
            <h1 class="font-bold text-[24px]">
              Send <Icon name="fa:send"></Icon>
            </h1>
          </Button>

          <Divider></Divider>

          <NuxtLink to="/">
            <p class="text-[#7E30E1] text-center text-[12px]">
              Back To Homepage
            </p>
          </NuxtLink>
        </form>
      </template>
    </Card>
  </div>
</template>

<script setup>
let form = reactive({
  email: "",
});

definePageMeta({
  layout: false,
});

function Submit() {
  console.log("walawe");
}
</script>

<style>
</style>