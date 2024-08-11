import { defineStore } from 'pinia'
import { ref } from "vue";

export const useBoardStore = defineStore('board', () => {

  const secretCode = ref([]);

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

  const keyPegBoard = ref([
    ['B', 'R', 'B', 'R'],
    ['W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W']
  ]);

  const insertPegLocation = ref({
    row: 9,
    peg: 0
  })

  const keyPegLocation = ref({
    row: 9,
    peg: 0
  })

  const selectionPegs = ref(['R', 'O', "DY", 'LY', "G", 'B', "Pu", 'Pi']);

  //Colors from PastelColorPalettes
  const colorMap = ref({
    'R': "#FA9189",
    'O': "#FCAE7C",
    "DY": "#ffd860",
    "LY": "#fff827",
    "G": "#B3F5BC",
    "B": "#D6F6FF",
    "Pu": "#E2CBF7",
    "Pi": "#ffbef0",
    "W": "#FFFFFF",
    "Bk": "#000000"
  });

  return {
    selectionPegs,
    board,
    insertPegLocation,
    secretCode,
    colorMap,
    keyPegBoard,
    keyPegLocation
  }
})