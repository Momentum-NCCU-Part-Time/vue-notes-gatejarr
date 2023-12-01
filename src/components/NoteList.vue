<script setup>
import { ref } from 'vue'
import { getNotes } from '@/requests'

const notes = ref([])
getNotes().then((data) =>{
  notes.value = data
})
</script>

<template>
  <ul>
    <li v-for="note in notes"
      :key="note.id">
      {{ note.title }},
      {{ note.body }}
    </li>
  </ul>
</template>