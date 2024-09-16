<template>
    <div class="mastermind-board-container">
        <div v-for="(row, index) of boardStore.board" :key="index" class="row-container">
            <!-- Code Pegs -->
            <div v-for="(colorCode, idx) of row" :key="`${index} ${idx}`">
                <Peg :colorCode="colorCode" class="row-peg" />
            </div>
            <!-- Key Pegs -->
            <div class="key-pegs-container">
                <div v-for="(colorCode, idx) of boardStore.keyPegBoard[index]" :key="`${index} ${idx}`">
                    <Peg :colorCode="colorCode" :keyPeg="true"/>
                </div>
            </div>
        </div>
    </div>
    <div class="user-actions-container">
        <div class="selection-pegs-container">
            <div v-for="colorCode of boardStore.selectionPegs" :key="colorCode" class="selection-peg">
                <Peg :colorCode="colorCode" @click="selectPeg(colorCode)" class="select-peg"/>
            </div>
        </div>
        <div class="user-buttons-container">
            <button @click="undoPeg">Undo</button>
            <button @click="checkRow">Check</button>
        </div>
    </div>
    <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Peg from "./Peg.vue";
import { useBoardStore } from "@/store/BoardStore";
const boardStore = useBoardStore();

onMounted(() => {
    generateSecretCode();
})

const errorMessage = ref(null);

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
    errorMessage.value = null;
    if(boardStore.board[boardStore.insertPegLocation.row].includes('W')) {
        errorMessage.value = "Error: row needs to be full";
        return;
    }
    for(let i = 0; i < 4; i++) {
        let current = boardStore.board[boardStore.insertPegLocation.row][i];
        if(current === boardStore.secretCode[i]) {
            //update keyPegBoard with green peg
            boardStore.keyPegBoard[boardStore.keyPegLocation.row][boardStore.keyPegLocation.peg] = 'G';
            boardStore.keyPegLocation.peg += 1;
        } else if(boardStore.secretCode.includes(current)) {
            //update keyPegBoard with yellow peg;
            boardStore.keyPegBoard[boardStore.keyPegLocation.row][boardStore.keyPegLocation.peg] = 'DY';
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
    padding: 2px 0;
}

.row-peg {
    margin: 15px 10px;
    border: 2px solid #525252;
}

.key-pegs-container {
    display: grid;
    grid-template-columns: 30px 30px;
    align-items: center;
}

.key-pegs-container div{
    display: flex;
    justify-content: center;

}

.user-actions-container {
    display: flex;
    justify-content: space-between;
}

.selection-pegs-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    flex-grow: 1;
}

.selection-peg {
    display: grid;
    margin: 5px 10px;
    cursor: pointer;
}

.user-buttons-container {
    display: flex;
    flex-direction: column;
    width: 60px;
    justify-content: center;
}

button {
    background-color: #26bee9;
    border: none;
    color: #D6F6FF;
    padding: 8px 0px;
    text-align: center;
    font-size: 10px;
    cursor: pointer;
    transition: 200ms;
    margin: 5px 0;
    font-family: "Rubik Mono One", monospace;
    font-weight: 400;
    font-style: normal;
    border-radius: 5px;
    letter-spacing: 1px;
    box-shadow: 3px 3px 10px #bfbfbf;
}

button:hover {
  background: #042297;
	color: #fff827;
}

.error-message {
    color: #db2d2d;
    font-size: 12px;
    padding: 10px;
    position: absolute;
    background: #ff737369;
    right: 15px;
    top: 15px;
}

</style>