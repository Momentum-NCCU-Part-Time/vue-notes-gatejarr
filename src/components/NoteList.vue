<!-- Note Display -->

<template>
  <ul>
    <li v-for="note in notes"
      :key="note.id">
      {{ note.title }},
      {{ note.body }},
      {{ note.updatedAt }},
      {{ note.createdAt }}
    </li>
  </ul>
  <NewForm @note-created="addNoteToList"/>
</template>


<script setup>
import { ref } from 'vue'
import { getNotes } from '@/requests'
import NewForm from './NewForm.vue'
import NoteEditDelete from './NoteEditDelete.vue'

const notes = ref([])
getNotes().then((data) =>{
  notes.value = data
})

const addUpdatedNote = (updatedNote) => {
  notes.value = notes.value.map((note) => {
    if (note.id === updatedNote.id) {
      return updatedNote
    }
    return note
  })
}

const addNoteToList = (note) => {
  notes.value = [...notes.value, note]
}

const removeDeletedNote = (noteId) => {
  notes.value = notes.value.filter((note) => note.id !== noteId)
}

</script>