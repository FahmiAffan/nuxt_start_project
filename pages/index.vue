<template>
  <!-- <div class="h-screen bg-[#7E30E1] flex flex-row container mx-auto">
    <div class="columns-6 h-5 border-4 border-[red] w-full"></div>
    <div class="columns-6 h-5 border-4 border-[red] w-full"></div>
  </div> -->
  <div class="w-full flex flex-col">
    <!-- Header -->
    <div class="flex w-full gap-4">
      <div class="border-solid border-2 border-gray-100 w-[33%] rounded-2xl">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-between">
            <Icon
              name="iconoir:book-solid"
              class="text-[#0DCAF0] bg-[#E7FAFE] p-2 rounded-xl m-3"
              size="52px"
            ></Icon>
            <div>
              <h1 class="text-2xl font-bold">12</h1>
              <p class="text-[#64748B]">Total Buku</p>
            </div>
          </div>

          <Icon name="ic:round-navigate-next" class="mr-3"></Icon>
        </div>
      </div>
      <div class="border-solid border-2 border-gray-100 w-[33%] rounded-2xl">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-between">
            <Icon
              name="solar:user-bold"
              class="text-[#28A745] bg-[#EAF6EC] p-2 rounded-xl m-3"
              size="52px"
            ></Icon>
            <div>
              <h1 class="text-2xl font-bold">12</h1>
              <p class="text-[#64748B]">Total Pengguna</p>
            </div>
          </div>

          <Icon name="ic:round-navigate-next" class="mr-3"></Icon>
        </div>
      </div>
      <div class="border-solid border-2 border-gray-100 w-[33%] rounded-2xl">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-between">
            <Icon
              name="solar:clipboard-list-bold"
              class="text-[#624BFF] bg-[#E0DCFE] p-2 rounded-xl m-3"
              size="52px"
            ></Icon>
            <div>
              <h1 class="text-2xl font-bold">12</h1>
              <p class="text-[#64748B]">Total Peminjaman</p>
            </div>
          </div>

          <Icon name="ic:round-navigate-next" class="mr-3"></Icon>
        </div>
      </div>
    </div>
    <!-- Body -->
    <div class="mt-5">
      <!-- Book Section -->
      <div class="grid grid-cols-2 gap-6">
        <div class="border-solid border-2 border-gray-100 rounded-2xl p-3">
          <h1 class="text-[24px] font-bold">Buku Terbaru</h1>
          <div class="grid grid-cols-2 gap-2">
            <div
              class="border-solid border-2 border-gray-100 rounded-lg h-max"
              v-for="i in dataBuku"
              :key="i"
            >
              <img :src="i.image" alt="" style="height: auto; width: 100%" />
              <div class="p-3">
                <h3 class="font-bold">Harry Potter</h3>
                <span class="text-[12px]">By: J.K Rowling</span>
              </div>
            </div>
          </div>
        </div>
        <div style="border: 1px solid red">2</div>
      </div>
      <!-- Graphic -->
      <div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePrimeVue } from "primevue/config";
import Chart from "primevue/chart";

const toggleTheme = (newTheme) => {
  useColorMode().preference = newTheme;
};

const dataBuku = reactive([
  {
    image: "https://m.media-amazon.com/images/I/71-++hbbERL._AC_SL1000_.jpg",
  },
  {
    image: "https://m.media-amazon.com/images/I/71-++hbbERL._AC_SL1000_.jpg",
  },
]);

const setChartData = () => {
  return {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Sales",
        data: [540, 325, 702, 620],
        backgroundColor: [
          "rgba(249, 115, 22, 0.2)",
          "rgba(6, 182, 212, 0.2)",
          "rgb(107, 114, 128, 0.2)",
          "rgba(139, 92, 246 0.2)",
        ],
        borderColor: [
          "rgb(249, 115, 22)",
          "rgb(6, 182, 212)",
          "rgb(107, 114, 128)",
          "rgb(139, 92, 246)",
        ],
        borderWidth: 1,
      },
    ],
  };
};

// let self = useNuxtApp();

// function toast() {
//   self.$toast.add({
//     severity: "info",
//     summary: "Info",
//     detail: "Message Content",
//     life: 3000,
//   });
// }

// onMounted(() => {});

let submitBtn = () => {};
</script>

<style>
</style>