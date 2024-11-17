<template>
  <Dialog
    v-model:visible="visible"
    modal
    maximizable
    style="max-width: '50rem'; max-height: 30rem; background-color: white"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    class="rounded-t-2xl rounded-b-2xl"
  >
    <template #header>
      <div class="font-semibold text-lg">
        <p v-if="props.method == 'post'" class="text-2xl">
          Tambah
          {{ props.header }}
        </p>
        <p v-if="props.method == 'put'">
          Edit
          {{ props.header }}
        </p>
      </div>
    </template>
    <template #closeicon>
      <Icon name="ic:baseline-close" class="btn-close" @click="reset"></Icon>
    </template>
    <Form
      @submit="onSubmit"
      :schema="props.schema"
      :validation-schema="schema"
      style="overflow-y: auto"
      ref="form"
      class="h-full"
    >
      <slot name="body"></slot>
      <div class="flex justify-end">
        <!-- <Button type="reset" class="mt-5" @click="reset()">Cancel</Button> -->
        <Button type="submit" class="mt-5" @click="onSubmit">Submit</Button>
      </div>
    </Form>
  </Dialog>
</template>

<script setup lang="ts">
import { reactive, ref, toRaw, defineEmits } from "vue";
import api from "../../composables/api";

const visible = defineModel();

const form = ref(null);

const emit = defineEmits(["submit", "onClose"]);

const props = defineProps({
  schema: Object,
  method: String,
  endpoint: String,
  header: String,
});

const reset = () => {
  toRaw(form.value).resetForm();
  emit("onClose");
};

const onSubmit = (value, { resetForm }) => {
  if (props.method == "post") {
    // resetForm();
    api()
      .post(`/${props.endpoint}`, value)
      .then(async (res) => {
        await resetForm();
        emit("submit");
      })
      .finally(() => {
        return 0;
      });
  }
  if (props.method == "put") {
    api().put(`/${props.endpoint}`);
  }
};
</script>

<style scoped>
#header {
  /* .rounded-t-2xl; */
  border-radius: 1rem;
  border: 1px solid red;
}
</style>