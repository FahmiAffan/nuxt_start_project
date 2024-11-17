<template>
  <div>
    <h1 class="font-lg">List Buku</h1>
    <!-- Dialog -->

    <ConfirmationPopUp
      v-model="confirmationVisibility"
      header="buku"
      @submit="deleteData()"
    ></ConfirmationPopUp>

    <FormPopUp
      v-model="visible"
      method="post"
      :schema="schema"
      endpoint="buku"
      header="Buku"
      @submit="afterCreateData()"
      @onClose="onClose()"
    >
      <template #body>
        <TextInput
          v-model="form.judul_buku"
          placeholder="Masukkan Judul Buku"
          name="judul_buku"
        ></TextInput>
        <TextInput
          v-model="form.penerbit"
          placeholder="Masukkan Penerbit Buku"
          name="penerbit"
        ></TextInput>
        <NumberInput
          v-model="form.qty"
          placeholder="Masukkan Kuantitas Buku"
          name="qty"
        ></NumberInput>
        <TextInput
          v-model="form.series"
          placeholder="Masukkan Penerbit Buku"
          name="series"
        ></TextInput>
        <FileUploader name="image" v-model="form.image"></FileUploader>

        <!-- Editor -->
        <TextEditor name="deskripsi" label="Deskripsi"></TextEditor>
      </template>
    </FormPopUp>

    <!-- Table -->

    <Table :data="data" :theader="theader" :numberable="true">
      <template #above>
        <Button color="white" @click="visible = true">
          <Icon name="mdi:plus"></Icon> New Buku
        </Button>
      </template>
      <template #tcontent>
        <tr v-for="(data, index) in data" :key="data" class="tb-data">
          <td>{{ (index += 1) }}</td>
          <td>{{ data?.judul_buku }}</td>
          <td>{{ data?.penerbit }}</td>
          <td>{{ data?.series }}</td>
          <td>
            <button>
              <Icon
                name="mdi:pencil"
                color="coral"
                @click="editData(data)"
              ></Icon>
            </button>
            <button>
              <Icon
                name="iconamoon:trash"
                color="red"
                @click="confirmDelete(data.id_buku)"
              ></Icon>
            </button>
          </td>
        </tr>
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">
import api from "../composables/api";
import { onMounted, reactive, ref, toRaw } from "vue";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import Editor from "primevue/editor";
import { useField } from "vee-validate";

const visible = ref(false);
const confirmationVisibility = ref(false);

const theader = ref(["Judul Buku", "Penerbit", "Series", "Aksi"]);

let data = ref();
let selectedId = ref();

let form = reactive({
  judul_buku: "",
  penerbit: "",
  qty: "",
  series: "",
  image: null,
});

const schema = toTypedSchema(
  z.object({
    judul_buku: z.string({ message: "Required" }).min(1, "Required"),
    penerbit: z.string().min(1, { message: "Required" }),
    qty: z.number().min(1, { message: "Required" }),
    series: z.string().min(1, { message: "Required" }),
    image: z.any().nullable(),
    deskripsi: z.string(),
  })
);

const editData = (value) => {
  form = value;
  visible.value = true;
};

const onClose = () => {
  form = reactive({
    judul_buku: "",
    penerbit: "",
    qty: "",
    series: "",
    image: null,
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
    .get("/buku")
    .then(async (res) => {
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

<style scoped>
table th {
  background-color: grey;
}
table tr {
  text-align: center;
}
</style>