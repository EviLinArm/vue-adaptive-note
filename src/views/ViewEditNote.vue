<template>
<div class="edit-note">
  <AddEditNote bgColor="link" ref="addEditNoteRef" v-model="noteContent" label="Edit note" placeholder="Edit note...">
    <template #buttons>
      <button :disabled="!noteContent" class="button is-link has-background-link">Save note</button>
    </template>
  </AddEditNote>
</div>
</template>

<script setup>
import {ref} from "vue";
import AddEditNote from "@/components/notes/AddEditNote.vue";

const noteContent = ref('')
</script>