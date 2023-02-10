<template>
<div class="edit-note">
  <AddEditNote bgColor="link" ref="addEditNoteRef" v-model="noteContent" label="Edit note" placeholder="Edit note...">
    <template #buttons>
      <button @click="$router.back()" class="button is-link is-light mr-2">Cancel</button>
      <button @click="handleSaveClicker" :disabled="!noteContent" class="button is-link has-background-link">Save note</button>
    </template>
  </AddEditNote>
</div>
</template>

<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import AddEditNote from "@/components/notes/AddEditNote.vue";
import {useStoreNotes} from "@/stores/storeNotes";

const storeNotes = useStoreNotes()
const route = useRoute()
const router = useRouter()

const noteContent = ref('')

noteContent.value = storeNotes.getNoteContent(route.params.id)

const handleSaveClicker = () => {
  storeNotes.updateNote(route.params.id, noteContent.value)
  router.back()
}
</script>