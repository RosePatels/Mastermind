import { defineStore } from 'pinia'
import { ref } from "vue";

export const useBoardStore = defineStore('board', () => {

  const board = ref([
    ['W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W'],
  ]);

  const selectionPegs = ref(['R', 'O', "DY", 'LY', "G", 'B', "Pu", 'Li']);

  return {
    selectionPegs,
    board
  }
})