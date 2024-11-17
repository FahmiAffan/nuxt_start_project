<template>
  <div>
    <ConfirmationPopUp
      v-model="confirmationVisibility"
      header="buku"
      @submit="deleteData()"
    ></ConfirmationPopUp>

    <FormPopUp
      v-model="visible"
      method="post"
      :schema="schema"
      endpoint="peminjaman"
      header="peminjaman"
      @submit="afterCreateData()"
      @onClose="onClose()"
    >
      <template #body>
        <div class="flex flex-col gap-2">
          <DropDown
            label="Approval"
            name="approval"
            :data="['pending', 'rejected', 'accepted']"
            v-model="form.approval"
          ></DropDown>
          <DropDown
            label="Status Peminjaman"
            name="status_peminjaman"
            :data="['booked', 'available']"
            v-model="form.status_peminjaman"
          ></DropDown>
          <DatePicker
            label="Tgl Pinjam"
            placeholder="Tanggal Pinjam"
            v-model="form.tgl_pinjam"
          ></DatePicker>
          <DatePicker
            label="Tgl Pengembalian"
            placeholder="Tanggal Pengembalian"
            v-model="form.tgl_pengembalian"
          ></DatePicker>
        </div>
      </template>
    </FormPopUp>

    <h1 class="font-lg">List Peminjaman</h1>

    <Table :data="data" :theader="theader" :numberable="true">
      <template #above>
        <Button color="white" style="color: white" @click="visible = true"
          ><Icon name="mdi:plus"></Icon> New Peminjaman
        </Button>
      </template>
      <template #tcontent>
        <tr v-for="(data, index) in data" :key="data" class="tb-data">
          <td>{{ (index += 1) }}</td>
          <td>{{ data.tgl_pinjam }}</td>
          <td>{{ data.tgl_pengembalian }}</td>
          <td>{{ data.status_peminjaman }}</td>
          <td>{{ data.approval }}</td>
          <td>
            <button>
              <NuxtLink to="/peminjaman/1">
                <Icon name="mdi:eye" color="#42A5F5"></Icon>
              </NuxtLink>
            </button>
            <button>
              <Icon name="mdi:pencil" color="#FBC02D" @click="editData(data)"></Icon>
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
import { toTypedSchema } from "@vee-validate/zod";
import { onMounted, reactive, ref } from "vue";
import { z } from "zod";
import api from "../../composables/api";

const theader = ref([
  "Tgl Pinjam",
  "Tgl Pengembalian",
  "Status Peminjaman",
  "Approval",
  "Aksi",
]);

const visible = ref(false);
const confirmationVisibility = ref(false);

let data = ref();
let selectedId = ref();

let form = reactive({
  tgl_pinjam: null,
  tgl_pengembalian: null,
  status_peminjaman: null,
  approval: null,
  id_user: null,
  id_buku: null,
});

const schema = toTypedSchema(
  z.object({
    // judul_buku: z.string({ message: "Required" }).min(1, "Required"),
    // penerbit: z.string().min(1, { message: "Required" }),
    // qty: z.number().min(1, { message: "Required" }),
    // series: z.string().min(1, { message: "Required" }),
    // image: z.any().nullable(),
    // deskripsi: z.string(),
    tgl_pinjam: z.date({ message: "Input Type Must Be a Date" }),
    tgl_pengembalian: z.date({ message: "Input Type Must Be a Date" }),
    status_peminjaman: z.enum(["booked", "available"]),
    approval: z.enum(["pending", "rejected", "accepted"]),
    id_user: z.string(),
    id_buku: z.number(),
  })
);

const editData = (value) => {
  form = value;
  visible.value = true;
};

const onClose = () => {
  form = reactive({
    tgl_pinjam: null,
    tgl_pengembalian: null,
    status_peminjaman: null,
    approval: null,
    id_user: null,
    id_buku: null,
  });
};

const deleteData = () => {
  const id = selectedId;
  api()
    .delete(`/buku/${id.value}`)
    .then(async (res) => {
      getData();
      confirmationVisibility.value = false;
      selectedId.value = null;
    })
    .catch((err) => {
      console.log(err);
      selectedId.value = null;
      confirmationVisibility.value = false;
    });
};

const confirmDelete = (id) => {
  confirmationVisibility.value = true;
  selectedId.value = id;
};

const afterCreateData = () => {
  visible.value = false;
  getData();
};

const getData = async () => {
  await api()
    .get("/peminjaman")
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