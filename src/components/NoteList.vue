<!-- Note Display -->

<script setup>
import { ref } from "vue";
import { getNotes, deleteNote } from "@/requests";
import NewForm from "./NewForm.vue";
import NoteEdit from "./NoteEdit.vue";
import NoteDelete from "./NoteDelete.vue";

const emit = defineEmits(["noteDeleted"]);

const notes = ref([]);
getNotes().then((data) => {
  notes.value = data;
});

const removeNote = (noteId) => {
  deleteNote(noteId).then(() => {
    emit("noteDeleted", noteId);
    removeDeletedNote();
  });
};

// const addUpdatedNote = (updatedNote) => {
//   notes.value = notes.value.map((note) => {
//     if (note.id === updatedNote.id) {
//       return updatedNote;
//     }
//     return note;
//   });
// };

const addNoteToList = (note) => {
  notes.value = [...notes.value, note];
};

const removeDeletedNote = (noteId) => {
  notes.value = notes.value.filter((note) => note.id !== noteId);
};
</script>

<template>
  <NewForm @note-created="addNoteToList" />
  <div v-for="note in notes" :key="note.id">
    <h2>{{ note.title }}</h2>
    <h4>{{ note.body }}</h4>
    <button @click="removeNote(note.id)">Delete Works</button>
    <NoteEdit />
    <NoteDelete />
  </div>
</template>
