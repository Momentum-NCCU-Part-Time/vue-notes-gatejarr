<!-- New Note Form -->

<script setup>
import { ref } from "vue";
import { createNote } from "@/requests";
const newNoteTitle = ref("");
const newNoteBody = ref("");
const emit = defineEmits(["noteCreated"]);

const addNote = () => {
  if (!newNoteTitle.value) return;
  createNote({ title: newNoteTitle.value, body: newNoteBody.value }).then(
    (createdNote) => {
      emit("noteCreated", createdNote);
      resetForm();
    }
  );
};

const resetForm = () => {
  newNoteTitle.value = "";
  newNoteBody.value = "";
};
</script>

<template>
  <form @submit.prevent="addNote" class="addNote" id="newNote">
    <div id="newNote">
      <div id="newTitle">
        <label id="newNoteTitle" for="note-title">New Note Title</label>
        <input type="text" v-model="newNoteTitle" placeholder="Title" />
      </div>
      <div id="newNoteBody">
        <label id="newBody" for="note-body">New Note Body</label>
        <textarea v-model="newNoteBody" placeholder="Body"> </textarea>
      </div>
      <div>
        <button type="submit" :disabled="!newNoteTitle">Add Note</button>
      </div>
    </div>
  </form>
</template>
