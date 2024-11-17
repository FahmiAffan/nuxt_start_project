<template>
  <div>
    <Dialog
      v-model:visible="visible"
      modal
      style="max-width: '30rem'; max-height: 30rem; background-color: white"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      class="rounded-t-2xl rounded-b-2xl"
      :closable="false"
      ref="dialogConfirm"
    >
      <template #header>
        <div class="font-semibold text-lg">
          <p class="text-2xl">
            Hapus Data
            <!-- {{ props.header }} -->
          </p>
        </div>
      </template>
      <div>
        <p class="text-base">
          Data yang sudah dihapus tidak dapat kembali lagi.Apakah anda yakin
          ingin menghapus data ini?
        </p>
        <div class="flex justify-end pt-4">
          <Button
            class="mr-3"
            outlined
            severity="secondary"
            @click="closePopup()"
            >Cancel</Button
          >
          <Button severity="danger" @click="handleSubmit">Hapus</Button>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, toRaw } from "vue";

const emit = defineEmits(["submit"]);

const dialogConfirm = ref(null);
defineProps({
  header: String,
});
const visible = defineModel();

const closePopup = () => {
  visible.value = false;
};

const handleSubmit = () => {
  emit("submit");
};
</script>

<style>
</style>