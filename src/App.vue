<script setup>
import NoteList from './components/NoteList.vue'
import NewForm from './components/NewForm.vue'
</script>

<template>
  <div>
    <h1>GateJarr's Awesome Vue Notes App</h1>
    <div id="noteList">
      <NoteList />
    </div>
    <div id="newForm">
      <NewForm />
    </div>
    <!-- your code here -->
  </div>
</template>

<style scoped>
</style>
