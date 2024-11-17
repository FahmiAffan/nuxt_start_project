<template>
  <div>
    <h1 class="font-lg">List Buku</h1>
    <Table :data="data" :theader="theader" :numberable="true">
      <template #tcontent>
        <tr v-for="(data, index) in data" :key="data" class="tb-data">
          <td>{{ (index += 1) }}</td>
          <td>{{ data.tgl_pinjam }}</td>
          <td>{{ data.tgl_pengembalian }}</td>
          <td>{{ data.status_peminjaman }}</td>
          <td>{{ data.approval }}</td>
          <td>
            <button>
              <Icon name="mdi:eye" color="#42A5F5"></Icon>
            </button>
            <button>
              <Icon name="mdi:pencil" color="#FBC02D"></Icon>
            </button>
            <button>
              <Icon name="iconamoon:trash" color="#E53935"></Icon>
            </button>
          </td>
        </tr>
      </template>
    </Table>
  </div>
</template>
  
  <script setup lang="ts">
import { onMounted, ref } from "vue";
import api from "../../composables/api";

const route = useRoute();

const theader = ref([
  "Tgl Pinjam",
  "Tgl Pengembalian",
  "Status Peminjaman",
  "Approval",
  "Aksi",
]);

let data = ref();

const getData = async () => {
  await api()
    .get("/peminjaman/" + route.params.id)
    .then((res) => {
      data.value = res.data.data;
    })
    .finally((res) => {
      data.value = res.data.data;
    });
};

onMounted(async () => {
  getData();
});
</script>
  
  <style>
</style>