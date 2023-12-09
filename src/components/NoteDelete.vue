<!-- Delete Note -->

<script setup>
import { ref } from "vue";
import { deleteNote } from "@/requests";
</script>

<template>
  <button @click="deleteNote">Delete</button>
</template>
