<script setup>
import NoteList from "./components/NoteList.vue";
import NoteBook from "./components/NoteBook.vue";
</script>

<template>
  <div>
    <div id="header">
      <h1>GateJarr's Awesome Vue Notes App</h1>
    </div>
    <div id="noteList">
      <NoteBook />
    </div>
  </div>
</template>

<style scoped></style>
