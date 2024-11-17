<template>
  <div class="flex w-full">
    <div
      class="w-96 h-screen flex flex-col justify-between"
      style="border-right: 1px solid gray"
    >
      <div>
        <div class="flex">
          <p>Dark</p>
          <InputSwitch @change="changeTheme" v-model="checked" />
          <p>Light</p>
        </div>
        <h1>E - Perpus</h1>
        <h1>Home</h1>

        <ul>
          <NuxtLink
            v-for="i in SB_Content"
            :key="i"
            :to="i.link"
            exact-active-class="active-class"
            class="non-active-class"
          >
            <li class="flex">
              <Icon :name="i.icon" />
              <p>{{ i.title }}</p>
            </li>
          </NuxtLink>
        </ul>
      </div>
      <ul class="flex justify-center align-center">
        <Button class="w-full m-6" severity="danger" @click="logout()">
          Sign Out</Button
        >
      </ul>
    </div>
    <div class="w-full p-6">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const cookieToken = useCookie("token");

let checked = ref();
const router = useRouter();

const changeTheme = () => {
  const { value: colorMode } = useColorMode();
  useColorMode().preference = colorMode == "dark" ? "light" : "dark";

  console.log(colorMode);
};

const logout = () => {
  api()
    .post("/auth/logout")
    .then(async (res) => {
      if (res) {
        router.push({ path: "/login" });
      }
    })
};

onMounted(() => {
  useColorMode().preference = "light";

  const { value: colorMode } = useColorMode();
  if (colorMode == "light") {
    checked.value = true;
  }
});

const SB_Content = ref([
  {
    title: "Dashboard",
    link: "/",
    icon: "mdi:home",
  },
  {
    title: "Buku",
    link: "/buku",
    icon: "ri:book-line",
  },
  {
    title: "Pengguna",
    link: "/users",
    icon: "mdi:account-outline",
  },
  {
    title: "Peminjaman",
    link: "/peminjaman",
    icon: "icon-park-outline:afferent-two",
  },
  {
    title: "Profil",
    link: "/profile",
    icon: "uil:setting",
  },
]);
</script>

<style scoped>
.non-active-class li {
  padding: 12px;
  margin: 12px;
  color: #64748b;
}
.non-active-class p {
  padding-left: 12px;
}
.active-class li {
  background-color: #5d87ff;
  padding: 10px;
  margin: 12px;
  border-radius: 0.5em;
  color: white;
}
.active-class p {
  padding-left: 12px;
}
</style>