<template>
  <div>
    <label :for="name" class="font-semibold">{{ name }}</label>
    <Field
      type="number"
      class="text-black input_text"
      :placeholder="placeholder"
      v-model="value"
      :id="name"
      :name="name"
    />
    <ErrorMessage :name="name" style="color: red" />
  </div>
</template>
  
  <script setup>
defineProps({
  placeholder: String,
  name: String,
});

const value = defineModel();
</script>
  
  <style scoped>
@import "../assets/css/main.css";

.input_text {
  border: 2px solid #e2e8f0;
  border-radius: 0.5em;
  padding-left: 12px;
  padding: 6px;
  display: flex;
  width: 100%;
  outline: none;
  -webkit-transition: 0.2s;
  /* color: #64748B; */
  color: var(--gray-primary);
}
/* 64748B */

.input_text:focus {
  border: 2px solid var(--primer-1);
}
</style>