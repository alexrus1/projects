<template>
  <h1>Список курсов</h1>
  <!-- <CardEdit @set-new-course="addCard" /> -->
  <div class="card-list__cont">
    <app-card
      v-for="(item, index) in cards"
      :index="index"
      :card="item"
      :key="item.id"
      @click="emit('click-by-card', item, 'open-form')"
    /> 
  </div>
</template>

<script setup>
import AppCard from "./AppCard.vue";
import CardEdit from "./CardEdit.vue";
import { ref } from "vue";

const prop = defineProps({
  cards: {
    type: Object
  }
})

const emit = defineEmits(['click-by-card', 'open-form'])

const openForm = () => {
  const edit = document.getElementById('edit')
  edit.classList.remove('display')
};

</script>

<style>
.card-list__cont{
  width: 900px;
  display: grid;
  grid-template-columns: 50% 50%
}


</style>