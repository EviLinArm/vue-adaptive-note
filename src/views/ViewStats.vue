<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
      <tr>
        <th>Stat</th>
        <th>Value</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Number of notes</td>
        <td>{{storeNotes.totalNotesCount}}</td>
      </tr>
      <tr>
        <td>Number of characters (of all notes)</td>
        <td>{{storeNotes.totalCharactersCount}}</td>
      </tr>
      </tbody>
    </table>
    <input v-autofocus v-model="bookMark" class="input" type="text" placeholder="Bookmark!"/>
  </div>
</template>

<script setup>
import vAutofocus from "@/directives/vAutofocus";
import {useStoreNotes} from "@/stores/storeNotes";
import useWatchCharacters from "@/use/useWatchCharacters";
import {ref} from "vue";
const storeNotes = useStoreNotes()
const bookMark = ref('');
useWatchCharacters(bookMark)
</script>