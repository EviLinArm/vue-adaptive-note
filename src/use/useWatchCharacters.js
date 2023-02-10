import {watch} from "vue";

const useWatchCharacters = (valueToWatch, maxChars = 25) => {
    watch(valueToWatch, (newVal) => {
        if (newVal.length > maxChars) {
            console.log(`String length is more ${newVal.length} then ${maxChars}`)
        }
    })
}

export default useWatchCharacters