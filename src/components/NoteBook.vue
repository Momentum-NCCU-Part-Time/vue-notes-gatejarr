<!-- Note Display -->

<script setup>
import { ref } from "vue";
import { getNotes } from "@/requests";
import NewForm from "./NewForm.vue";
import NoteCard from "./NoteCard.vue";

const notes = ref([]);
getNotes().then((data) => {
  notes.value = data;
});

const addNoteToList = (note) => {
  notes.value = [...notes.value, note];
};

const removeDeletedNote = (noteId) => {
  notes.value = notes.value.filter((note) => note.id !== noteId);
};
</script>

<template>
  <NewForm @note-created="addNoteToList" />
  <NoteCard
    v-for="note in notes"
    :key="note.id"
    :note="note"
    @noteDeleted="($event) => removeDeletedNote($event)"
    @noteEdited="($event) => updateNoteToList($event)"
  />
</template>
