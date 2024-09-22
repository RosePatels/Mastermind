<template>
    <div class="instructions-container">
        <p>The computer will generate a secret code. It is your job as the player to guess what the secret code is.</p>
        <p style="display: flex;">To make a guess, click on the colored pegs to add it to the current row.</p>
        <img src="../assets/peg-selection.gif" />
        <p>By clicking on the check button, the computer will give feedback on your guess via the smaller pegs on the right side of the row.</p>
        <img src="../assets/check-row.gif" />
        <p class="peg-instruction-container"><Peg :keyPeg="true" class="peg-instruction"/> The black peg indicates that one of your pegs is an incorrect guess</p>
        <p class="peg-instruction-container"><Peg :keyPeg="true" :colorCode="'O'" class="peg-instruction" /> The orange peg indicates that one of your pegs is the correct color but in the wrong location</p>
        <p class="peg-instruction-container"><Peg :keyPeg="true" :colorCode="'G'" class="peg-instruction" /> The green peg indiciates that you have guessed a peg correctly. It is in the right color and location.</p>
    </div>
    <button @click="goToStart">Back</button>
</template>

<script setup lang="ts">
import { useBoardStore } from '@/store/BoardStore'; 
import Peg from "@/components/Peg.vue";

const boardStore = useBoardStore();

const goToStart = () => boardStore.screenState = 'Start';
</script>

<style scoped>
.instructions-container {
    max-width: 900px;
    margin: 0 auto;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    overflow: scroll;
}

button {
    margin-top: 10px;
    background-color: #26bee9;
	border: none;
	color: #D6F6FF;
	width: 75px;
	padding: 10px 0px;
	text-align: center;
	font-size: 12px;
	cursor: pointer;
	transition: 200ms;
	font-family: "Rubik Mono One", monospace;
	font-weight: 400;
	font-style: normal;
	border-radius: 5px;
	letter-spacing: 1px;
}

button:hover {
  background: #042297;
	color: #fff827;
}

.peg-instruction-container {
    display: flex;
}

.peg-instruction {
    margin-right: 5px;
    margin-top: 3px;
}
</style>