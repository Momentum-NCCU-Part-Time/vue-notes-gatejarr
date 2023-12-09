<!-- Edit Note -->

<script setup>
import { ref } from "vue";
import { editNote } from "@/requests";
</script>

<template>
  <button @click="editNote">Edit</button>
</template>
