<template>
  <div class="input-group mb-3">
    <input
      v-model="taskName"
      type="text"
      class="form-control"
      placeholder="Новая задача"
      @keydown.enter="onCreate"
    />
    <button @click="onCreate" class="btn btn-primary" type="button">
      <i class="bi bi-plus"></i>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const emits = defineEmits(['create'])

const taskName = ref('')

const onCreate = () => {
  if (taskName.value) {
    emits('create', taskName.value)
    taskName.value = ''
  }
}
</script>
