<script setup>
import { ref } from "vue";
import { deleteNote, editNote } from "@/requests.js";
const props = defineProps({
  note: Object,
});

const emit = defineEmits(["noteEdited", "noteDeleted"]);

const editing = ref(false);

// Delete Notes Start
const removeNote = (noteId) => {
  deleteNote(noteId).then(() => {
    emit("noteDeleted", noteId);
  });
};
// Delete Notes End
const saveEdit = (noteId) => {
  if (!editedTitle.value) return;
  editNote({
    id: noteId,
    title: editedTitle.value,
    body: editedBody.value,
  }).then((editedNote) => {
    emit("noteEdited", editedNote);
    editing.value = false;
  });
};
</script>

<template>
  <div v-if="editing">
    <input type="text" v-model="editedTitle" />
    <textarea v-model="editedBody"></textarea>
    <button @click.prevent="() => saveEdit(note.id)">Save</button>
  </div>
  <div v-else id="noteCard">
    <h3>{{ note.title }}</h3>
    <h5>{{ note.body }}</h5>
    <button @click.prevent="removeNote(note.id)">Delete</button>
    <button @click.prevent="() => (editing = true)">Edit</button>
  </div>
</template>
