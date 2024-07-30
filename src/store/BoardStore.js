import { defineStore } from 'pinia'
import { ref } from "vue";

export const useBoardStore = defineStore('board', () => {
  const selectionPegs = ref(['R', 'O', "DY", 'LY', "G", 'B', "Pu", 'Li']);

  return {
    selectionPegs
  }
})