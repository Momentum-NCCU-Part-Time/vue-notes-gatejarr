<!-- Delete Note -->

<script setup>
import { ref } from "vue";
import { deleteNote } from "@/requests";

// const removeNote = (noteId) => {
//   deleteNote(noteId);
// };
</script>

<template>
  <button @click="deleteNote(note.id)">Delete</button>
</template>
