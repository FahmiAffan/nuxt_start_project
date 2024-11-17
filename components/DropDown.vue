
<template>
  <div>
    <label :for="name" class="text-">{{ label }}</label>
    <Field :name="name" as="select" class="parent_dd" placeholder="select" v-model="selectedData">
      <option v-for="key in data" :key="key" :value="key" class="child_dd">
        {{ key }}
      </option>
    </Field>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  data: Array,
  label: String,
});

const selectedData = defineModel();
</script>


<style scoped>
.parent_dd {
  border: 2px solid #e2e8f0;
  border-radius: 0.5em;
  padding-left: 12px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  outline: none;
  -webkit-transition: 0.2s;
  /* color: #64748B; */
  color: var(--gray-primary);
}
/* 64748B */

.parent_dd:focus {
  border: 2px solid var(--primer-1);
}

.child_dd {
  border: 1px solid red;
}
</style>