<template>
  <span
    class="list-group-item list-group-item-action bg-light"
    @mouseover="onHover"
    @mouseleave="onLeave"
  >
    {{ task.title }}

    <button
      v-if="isHovered"
      @click="onRemove"
      class="position-absolute end-0 top-0 bottom-0 btn btn-danger"
      type="button"
      id="removeButton"
    >
      <i class="bi bi-trash"></i>
    </button>
  </span>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Props {
  task: object
}

const props = defineProps<Props>()
const emits = defineEmits(['remove'])

const isHovered = ref(false)

const onHover = () => {
  isHovered.value = true
}

const onLeave = () => {
  isHovered.value = false
}

const onRemove = () => {
  emits('remove', props.task.id)
}
</script>
