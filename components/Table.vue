<template>
  <div>
    <div class="flex flex-row justify-between mt-5">
      <TextInput></TextInput>
      <slot class="grow" name="above"> </slot>
    </div>
    <table class="w-full mt-5">
      <tr>
        <th v-if="numberable">No</th>
        <th v-for="(theader, index) in theader" :key="index">
          {{ theader }}
        </th>
      </tr>
      <slot name="tcontent"></slot>

      <div v-if="data?.length == 0">
        <p>No Data Available</p>
      </div>

      <!-- <tr v-for="(i, index) in data" :key="index">
        <td v-if="numberable">{{ (index += 1) }}</td>
      </tr> -->
    </table>
    <div class="flex justify-end mt-16">
      <div class="text-[#787D87]">
        <Icon name="mdi:skip-previous" color="#787D87"></Icon>
        <Icon name="mdi:fast-rewind" color="#787D87"></Icon>
        1 to 1 of 1
        <Icon name="mdi:fast-forward" color="#787D87"></Icon>
        <Icon name="mdi:skip-next" color="#787D87"></Icon>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Array,
  theader: Array,
  numberable: Boolean,
});
</script>

<style scoped>
table th {
  background-color: #e7ebee;
  padding: 0.75em;
}
table tr {
  text-align: center;
}
</style>