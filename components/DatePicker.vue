<template>
  <div class="relative">
    <div @click="show = !show">
      <!-- <p @click="show = !show">Input</p>
        {{ date }} -->
      <label :for="name" class="font-semibold">{{ label }}</label>
      <div class="input_date cursor-pointer">
        <div class="flex items-center">
          <Icon class="mr-2" name="ic:baseline-calendar-month"></Icon>
          <p>{{ date == null ? placeholder : new Date(date).toDateString()}}</p>
        </div>
        <Icon name="tabler:chevron-down"> </Icon>
      </div>
      <!-- {{ placeholder }} -->
    </div>
    <Calendar v-if="show" v-model="date" class="calendar-field" inline>
      <template #footer>
        <div class="flex justify-end gap-2">
          <Button outlined @click="show = false">cancel</Button>
          <Button @click="show = false">confirm</Button>
        </div>
      </template>
    </Calendar>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  placeholder: String,
});
const date = defineModel();
const show = ref(false);
</script>

<style>
.calendar-field {
  position: absolute;
  top: 12;
  z-index: 100;
}
.input_date {
  border: 2px solid #e2e8f0;
  border-radius: 0.5em;
  padding-left: 12px;
  padding: 6px;
  display: flex;
  width: 100%;
  outline: none;
  -webkit-transition: 0.2s;
  color: var(--gray-primary);
  align-items: center;
  color: #64748b;
  justify-content: space-between;
}
</style>