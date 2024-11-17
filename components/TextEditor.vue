<template>
  <div>
    <label :for="name" class="font-semibold">{{ label }}</label>
    <Editor :name="name" v-model="value" editorStyle="height: 320px" />
    <p style="color: red">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import Editor from "primevue/editor";
import { useField } from "vee-validate";
import { string } from "zod";

const props = defineProps({
  name: String,
  validator: string,
  label: String,
});

const validator = string().min(1, "Required");

const { value, errorMessage } = useField(props.name, validator);
</script>

<style>
</style>