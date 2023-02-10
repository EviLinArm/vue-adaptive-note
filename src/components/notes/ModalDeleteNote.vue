<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete note?</p>
        <button @click="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        Are you sure want to delete note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button @click="closeModal" class="button is-success">Cancel</button>
        <button @click="deleteNote" class="button is-danger">Delete</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import {onClickOutside} from "@vueuse/core";
import {useStoreNotes} from "@/stores/storeNotes";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  noteId: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])

const storeNotes = useStoreNotes()

const modalCardRef = ref(null)

const closeModal = () => {
  emit('update:modelValue', false)
}

onClickOutside(modalCardRef, closeModal)

const handleEscape = (e) => {
  if (e.key === 'Escape') closeModal()
}

onMounted(() => {
  document.addEventListener('keyup', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keyup', handleEscape)
})

const deleteNote = () => {
  storeNotes.deleteNote(props.noteId)
  closeModal()
}
</script>