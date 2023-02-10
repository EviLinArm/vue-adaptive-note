import {defineStore} from "pinia";
export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
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
            ]
        }
    },
    actions: {
        addNote(newNote) {
            this.notes.unshift({
                id: new Date().getTime().toString(),
                content: newNote
            });
        },
        deleteNote(idToDelete) {
            this.notes = this.notes.filter((item) => item.id !== idToDelete)
        },
        updateNote(id, content) {
            let index = this.notes.findIndex(note => note.id === id)
            this.notes[index].content = content
        }
    },
    getters: {
        getNoteContent: (state) => {
          return (id) => {
              return state.notes.filter(note => note.id === id)[0].content
          }
        },
        totalNotesCount: (state) => {
          return state.notes.length
        },
        totalCharactersCount: (state) => {
            let count = 0
            state.notes.forEach(note => {
                count +=note.content.length
            })
            return count
        }
    }
})