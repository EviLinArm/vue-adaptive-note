<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea ref="newNoteRef" v-model="newNote" class="textarea" placeholder="Write your text here..."/>
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add note</button>
        </div>
      </div>
    </div>
    <Note v-for="note of notes" :note="note" @deleteClicked="deleteNote" :key="note.id"/>
  </div>
</template>

<script setup>
import {ref} from "vue";
import Note from "@/components/notes/Note.vue";

const newNote = ref('')

const newNoteRef = ref(null)

const notes = ref([
  {
    id: 'id1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias aspernatur blanditiis corporis dolores est excepturi fugit iste laborum odio quae quam recusandae, reprehenderit rerum, sequi veniam veritatis voluptas.'
  },
  {
    id: 'id21',
    content: 'A accusantium alias aspernatur blanditiis corporis dolores est excepturi fugit iste laborum odio quae quam recusandae, reprehenderit rerum, sequi veniam veritatis voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
  },
  {
    id: 'id31',
    content: 'Fugit iste laborum odio quae quam recusandae, reprehenderit rerum, sequi veniam veritatis voluptas Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias aspernatur blanditiis corporis dolores est excepturi.'
  },
  {
    id: 'id41',
    content: 'Dolores est excepturi fugit iste laborum odio quae quam recusandae, reprehenderit rerum, sequi veniam veritatis voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias aspernatur blanditiis corporis.'
  }
])

const addNote = () => {
  notes.value.unshift({
    id: new Date().getTime().toString(),
    content: newNote.value
  });
  newNote.value = ''
  newNoteRef.value.focus()
}

const deleteNote = (idToDelete) => {
  notes.value = notes.value.filter((item) => item.id !== idToDelete)
}
</script>