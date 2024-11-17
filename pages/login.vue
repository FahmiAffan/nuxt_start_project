<template>
  <div class="flex h-[100vh] justify-center items-center futura">
    <!-- <Toast /> -->
    <Card class="w-[414px]">
      <template #content>
        <h1
          class="text-[24px] text-[#000000] font-medium text-center pb-[23px]"
        >
          Welcome To
          <Image
            class="pl-2"
            src="_nuxt/assets/image/misty-icon.svg"
            alt=""
          ></Image>
        </h1>
        <form @submit.prevent="Submit()" class="flex flex-col">
          <label for="username" class="text-[#000000] font-semibold text-[12px]"
            >Username or email</label
          >
          <InputText
            type="email"
            variant="filled"
            v-model="form.username"
            class="mb-[22px] h-[51px] text-black"
            placeholder="student@example.com"
            id="username"
          />
          <label for="password" class="text-[#000000] font-semibold text-[12px]"
            >Password</label
          >
          <InputText
            type="password"
            variant="filled"
            v-model="form.password"
            class="h-[51px] text-black"
            placeholder="***********"
            id="password"
          />
          <!-- .dark:hover:bg-primary-300:hover -->
          <div class="mb-[32px] flex justify-between pt-[19px]">
            <div class="flex items-center">
              <Checkbox
                id="checkbox"
                v-model="form.checked"
                outlined
                :binary="true"
              />
              <label for="checkbox" class="text-[#000000] text-[12px] pl-2"
                >Remember Me</label
              >
            </div>

            <NuxtLink to="/forgot">
              <p class="text-[#7E30E1] text-[12px]">Forgot Password?</p>
            </NuxtLink>
          </div>

          <Button
            type="submit"
            class="h-[51px] text-[#7E30E1] hover:bg-[#994DF6]"
          >
            <h1 class="font-bold">Log In</h1>
          </Button>

          <Divider></Divider>

          <Button
            @click="test"
            class="h-[51px] text-[#7E30E1] dark:bg-[#448AFF] dark:ring-[#448AFF] dark:border-[#448AFF] focus:dark:ring-[#82B1FF] focus:dark:border-[#82B1FF] hover:dark:bg-[#2979FF] hover:dark:border-[#82B1FF]"
          >
            <div class="bg-white p-[6px] rounded-full">
              <Icon name="devicon:google" size="25px"></Icon>
            </div>

            <h1 class="font-bold">Sign In With Google</h1>
          </Button>
        </form>
      </template>
    </Card>
  </div>
</template>

<script setup>
// GBORUI
const config = useRuntimeConfig();
const self = useNuxtApp();
const router = useRouter();

definePageMeta({
  layout: false,
});

let data = reactive({
  step: 1,
});


let form = reactive({
  email: "",
  password: "",
  checked: "",
  otp: "",
});

const attempt = useCookie("attempt");

const attempted = computed(() => {
  return attempt.value == true
    ? false
    : attempt.value == undefined
    ? true
    : attempt.value == false
    ? true
    : false;
});

async function Submit() {
  self.$axios
    .post("/auth/login", {
      username: form.username,
      password: form.password,
    })
    .then((res) => {
      let token = useCookie("token");
      token.value = res.data.data;
      router.push({ path: "/" });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
}

async function resendCode() {
  console.log("this is token");
}

async function sendCode() {
  self.$axios
    .post("/handleOTP", {
      otp: form.otp,
    })
    .then(async (res) => {
      attempt.value = false;
      let token = useCookie("token");
      token.value = res.data.data;
      router.push({ path: "/" });
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>

<style>
.walawe {
  color: var(--primary-500);
}
.futura {
  font-family: "Futura Std", sans-serif;
}
</style>