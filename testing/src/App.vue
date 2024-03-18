<template>
  <div
    class="d-flex justify-content-center align-items-center wv-100 vh-100 bg-primary bg-gradient"
  >
    <div class="card border-success mb-3 h-50" style="width: 400px; max-width: 100%">
      <div class="card-body d-flex flex-column h-100">
        <h3 class="mb-3">Список дел</h3>

        <task-input @create="onCreateTask" />

        <div v-if="tasks.length" class="list-group mb-4" style="overflow: auto">
          <task-card :task="task" v-for="task in tasks" :key="task.id" @remove="onRemoveTask" />
        </div>

        <task-footer class="mt-auto" :task-count="tasks.length" @clear="onClearTasks" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskInput from '@/components/TaskInput.vue'
import TaskCard from '@/components/TaskCard.vue'
import TaskFooter from '@/components/TaskFooter.vue'
import { ref } from 'vue'

const tasks = ref([])

const onCreateTask = (taskName: string) => {
  const newTask = {
    id: Date.now(),
    title: taskName
  }

  tasks.value.push(newTask)
}

const onRemoveTask = (taskId: number) => {
  const taskIndex = tasks.value.findIndex((t) => t.id === taskId)

  if (taskIndex !== -1) {
    tasks.value.splice(taskIndex, 1)
  }
}

// const onClearTasks = () => {
//   tasks.value = []
// }
</script>
