<template>
    <div class="mastermind-board-container">
        <div v-for="(row, index) of boardStore.board" :key="index" class="row-container">
            <!-- Code Pegs -->
            <div v-for="(colorCode, idx) of row" :key="`${index} ${idx}`">
                <Peg :colorCode="colorCode" class="row-peg" />
            </div>
            <!-- Key Pegs -->
            <div v-for="(colorCode, idx) of boardStore.keyPegBoard[index]" :key="`${index} ${idx}`">
                <Peg :colorCode="colorCode" :selectionPeg="true"/>
            </div>
        </div>
    </div>
    <div class="selection-pegs-container">
        <div v-for="colorCode of boardStore.selectionPegs" :key="colorCode" class="selection-peg">
            <Peg :colorCode="colorCode" @click="selectPeg(colorCode)"/>
        </div>
        <button @click="undoPeg">Undo</button>
        <button @click="checkRow">Check</button>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import Peg from "./Peg.vue";
import { useBoardStore } from "@/store/BoardStore";
const boardStore = useBoardStore();

onMounted(() => {
    generateSecretCode();
})

const generateSecretCode = () => {
    for(let i = 0; i < 4; i++) {
        boardStore.secretCode[i] = Object.keys(boardStore.colorMap)[getRandomIntInclusive(0, 7)];
    }
    console.log(boardStore.secretCode);
}

//MDN Math.random();
const getRandomIntInclusive = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

const selectPeg = (colorCode) => {
    boardStore.board[boardStore.insertPegLocation.row][boardStore.insertPegLocation.peg] = colorCode;
    updateInsertPegLocation();
}

const updateInsertPegLocation = () => {
    if(boardStore.insertPegLocation.peg < 3) {
        boardStore.insertPegLocation.peg += 1;
    }
}

const checkRow = () => {
    for(let i = 0; i < 4; i++) {
        let current = boardStore.board[boardStore.insertPegLocation.row][i];
        if(current === boardStore.secretCode[i]) {
            //update keyPegBoard with green peg
            boardStore.keyPegBoard[boardStore.keyPegLocation.row][boardStore.keyPegLocation.peg] = 'G';
            boardStore.keyPegLocation.peg += 1;
        } else if(boardStore.secretCode.includes(current)) {
            //update keyPegBoard with yellow peg;
            boardStore.keyPegBoard[boardStore.keyPegLocation.row][boardStore.keyPegLocation.peg] = 'LY';
            boardStore.keyPegLocation.peg += 1;
        }
    }
    checkEndGame();
    updateNewRowLocation();
}


const checkEndGame = () => {
    if(boardStore.keyPegBoard[boardStore.keyPegLocation.row].every(peg => peg === 'G')) {
        boardStore.screenState = 'Victory';
    } else if(boardStore.insertPegLocation.row === 0) {
        boardStore.screenState = 'Defeat';
    }
}

const updateNewRowLocation = () => {
    boardStore.keyPegLocation.row -= 1;
    boardStore.keyPegLocation.peg = 0;
    boardStore.insertPegLocation.row -= 1;
    boardStore.insertPegLocation.peg = 0;
}

const undoPeg = () => {
    boardStore.board[boardStore.insertPegLocation.row][boardStore.insertPegLocation.peg] = 'W';
    if(boardStore.insertPegLocation.peg > 0) {
        boardStore.insertPegLocation.peg -= 1;
    }
}

</script>

<style scoped>
.row-container {
    display: flex;
}

.row-peg {
    margin: 15px 10px;
    border: 2px solid #525252;
}

.selection-pegs-container {
    display: flex;
}

.selection-peg {
    margin: 5px 15px;
}
</style>