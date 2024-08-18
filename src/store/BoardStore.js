import { defineStore } from 'pinia'
import { ref } from "vue";

export const useBoardStore = defineStore('board', () => {

  const screenState = ref("Start");
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
    ['W', 'W', 'W', 'W'],
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
    "DY": "#ffcc31",
    "LY": "#fff707",
    "G": "#7cf38c",
    "B": "#adedff",
    "Pu": "#dcbdf8",
    "Pi": "#fbabe8",
    "W": "#FFFFFF",
    "Bk": "#000000"
  });

  const initializeNewGame = () => {
    board.value = [
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
    ];

    keyPegBoard.value = [
      ['W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W']
    ];

    insertPegLocation.value.row = 9;
    insertPegLocation.value.peg = 0;
    keyPegLocation.value.row = 9;
    keyPegLocation.value.peg = 0;
  }

  return {
    selectionPegs,
    board,
    insertPegLocation,
    secretCode,
    colorMap,
    keyPegBoard,
    keyPegLocation,
    screenState,
    initializeNewGame
  }
})