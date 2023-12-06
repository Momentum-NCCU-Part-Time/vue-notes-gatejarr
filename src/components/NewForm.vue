<!-- New Note Form -->

<template>
  <form @submit.prevent="addNote" class="addNote">
    <div>
      <div class="newNoteTitle">
        <label for="note-title">New Note Title</label>
        <input
        type="text"
        v-model="newNoteTitle"
        />
      </div>
      <div>
        <label for="note-body">New Note Body</label>
        <textarea
        v-model="newNoteBody">
        </textarea>
      </div>
      <div>
        <button
        type="submit"
        :disabled="!newNoteTitle">
        Add note
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
  import { ref } from 'vue'
  import { createNote } from '@/requests'
  const newNoteTitle = ref ('')
  const newNoteBody = ref ('')
  const emit = defineEmits(['noteCreated'])

  const addNote = () => {
    if (!newNoteTitle.value) return
    createNote({ title: newNoteTitle.value, body: newNoteBody.value}).then((createdNote) => {
      emit('noteCreated', createdNote)
      resetForm()
    })
  }

  const resetForm = () => {
    newNoteTitle.value = ''
    newNoteBody.value = ''
  }
</script>