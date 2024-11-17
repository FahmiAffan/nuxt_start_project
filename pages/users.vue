<template>
  <div>
    <h1 class="font-lg">List Buku</h1>

    <ConfirmationPopUp
      v-model="confirmationVisibility"
      header="buku"
      @submit="deleteData()"
    ></ConfirmationPopUp>

    <FormPopUp
      v-model="visible"
      method="post"
      :schema="schema"
      endpoint="users"
      header="Buku"
      @submit="afterCreateData()"
      @onClose="onClose()"
    >
      <template #body>
        <TextInput
          v-model="form.username"
          placeholder="Masukkan Judul Buku"
          name="username"
        ></TextInput>
        <TextInput
          v-model="form.password"
          placeholder="Masukkan Penerbit Buku"
          name="password"
        ></TextInput>
        <TextInput
          v-model="form.fullname"
          placeholder="Masukkan Kuantitas Buku"
          name="fullname"
        ></TextInput>
        <NumberInput
          v-model="form.nik"
          placeholder="Masukkan Penerbit Buku"
          name="nik"
        ></NumberInput>
        <DropDown
          name="role"
          :data="['admin', 'pengguna']"
          label="role"
        ></DropDown>

        <FileUploader name="image" v-model="form.image"></FileUploader>
      </template>
    </FormPopUp>

    <Table :data="data" :theader="theader" :numberable="true">
      <template #above>
        <Button color="white" style="color: white" @click="visible = true"
          ><Icon name="mdi:plus"></Icon> New User
        </Button>
      </template>
      <template #tcontent>
        <tr v-for="(data, index) in data" :key="data" class="tb-data">
          <td>{{ (index += 1) }}</td>
          <td>{{ data.username }}</td>
          <td>{{ data.fullname }}</td>
          <td>{{ data.role }}</td>
          <td>{{ data.image }}</td>
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
import { onMounted, reactive, ref } from "vue";
import api from "../composables/api";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import Editor from "primevue/editor";
import { useField } from "vee-validate";

const visible = ref(false);
const confirmationVisibility = ref(false);

const theader = ref(["Username", "Full Name", "Role", "Image", "Aksi"]);

let data = ref();
let selectedId = ref();

let form = reactive({
  username: "",
  password: "",
  fullname: "",
  nik: null,
  image: null,
  role: "",
});

const schema = toTypedSchema(
  z.object({
    username: z.string().email("Reuired @ tag"),
    password: z.string().min(8, "Password must at least 8 character"),
    fullname: z.string({ message: "Required" }),
    nik: z.number({ message: "Required" }),
    image: z.any().nullable(),
    role: z.string({ message: "Required" }),
  })
);

const editData = (value) => {
  form = value;
  visible.value = true;
};

const onClose = () => {
  form = reactive({
    username: "",
    password: "",
    fullname: "",
    nik: null,
    image: null,
    role: "",
  });
};

const getData = async () => {
  await api()
    .get("/users")
    .then((res) => {
      data.value = res.data.data;
    })
    .finally((res) => {
      data.value = res.data.data;
    });
};

const deleteData = () => {
  const id = selectedId;
  api()
    .delete(`/users/${id.value}`)
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

onMounted(async () => {
  getData();
});
</script>
  
<style scoped>
</style>