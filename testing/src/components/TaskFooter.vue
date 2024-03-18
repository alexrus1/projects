<template>
  <div>
    <div v-if="isAllCompleted">
      <span class="d-block fs-6 text-success text-center">Все задачи выполнены!</span>
    </div>
    <div v-else class="d-flex align-items-center gap-4 justify-content-between">
      <span id="span" class="fs-6 text-secondary">Задач осталось: {{ taskCount }}</span>
      <button id="btn" @click="onClear" class="btn btn-outline-primary" type="button">Очистить все</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  taskCount: number
}

const props = defineProps<Props>()
const emits = defineEmits(['clear'])

const isAllCompleted = computed(() => props.taskCount === 0)

const onClear = () => {
  emits('clear')
}
</script>
