<template>
  <ul>
    <li v-for="note in notes"
      :key="note.id">
      {{ note.title }},
      {{ note.body }},
      {{ note.updatedAt }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import { getNotes } from '@/requests'

const notes = ref([])
getNotes().then((data) =>{
  notes.value = data
})
</script>