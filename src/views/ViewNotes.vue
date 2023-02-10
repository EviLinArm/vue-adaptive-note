<template>
  <div class="notes">
    <AddEditNote v-model="newNote" ref="addEditNoteRef" placeholder="Add a new note...">
      <template #buttons>
        <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add note</button>
      </template>
    </AddEditNote>
    <Note v-for="note of storeNotes.notes" :note="note" :key="note.id"/>
  </div>
</template>

<script setup>
import {ref, watch} from "vue";
import {useStoreNotes} from "@/stores/storeNotes";
import Note from "@/components/notes/Note.vue";
import AddEditNote from "@/components/notes/AddEditNote.vue";
import useWatchCharacters from "@/use/useWatchCharacters";

const storeNotes = useStoreNotes()
const newNote = ref('')
const addEditNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

useWatchCharacters(newNote, 15)
</script>