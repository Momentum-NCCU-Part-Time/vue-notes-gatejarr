<!-- Delete Note -->

<script setup>
import { ref } from "vue";
import { deleteNote } from "@/requests";

const emit = defineEmits(["noteDeleted"]);

const removeNote = (noteId) => {
  deleteNote(noteId).then(() => {
    emit("noteDeleted", noteId);
  });
};
</script>

<template>
  <button @click="removeNote(note.id)">Delete Doesn't</button>
</template>
