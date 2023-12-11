<!-- Note Display -->

<script setup>
import { ref } from "vue";
import { getNotes, deleteNote, editNote } from "@/requests";
import NewForm from "./NewForm.vue";
import NoteEdit from "./NoteEdit.vue";

const notes = ref([]);
getNotes().then((data) => {
  notes.value = data;
});

const addNoteToList = (note) => {
  notes.value = [...notes.value, note];
};

// Delete Notes Start
const removeNote = (noteId) => {
  deleteNote(noteId).then(removeDeletedNote(noteId));
};

const removeDeletedNote = (noteId) => {
  notes.value = notes.value.filter((note) => note.id !== noteId);
};
// Delete Notes End

// Edit Notes Start
</script>

<template>
  <NewForm @note-created="addNoteToList" />
  <div v-for="note in notes" :key="note.id">
    <h2>{{ note.title }}</h2>
    <h4>{{ note.body }}</h4>
    <button @click.prevent="removeNote(note.id)">Delete</button>
    <NoteEdit />
  </div>
</template>
