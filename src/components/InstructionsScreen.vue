<template>
    <div class="instructions-container">
        <p>The computer will generate a secret code. It is your job as the player to guess what the secret code is.</p>
        <p style="display: flex;">To make a guess, click on the colored pegs to add it to the current row.</p>
        <p>With each row, you will get feedback from the computer on your guesses via the smaller pegs on the right side of the row.</p>
        <p>The black peg indicates that one of your pegs is an incorrect guess</p>
        <Peg :keyPeg="true" />
        <p>The orange peg indicates that one of your pegs is the correct color but in the wrong location</p>
        <Peg :keyPeg="true" :colorCode="'O'" />
        <p>The green peg indiciates that you have guessed a peg correctly. It is the right color and location.</p>
        <Peg :keyPeg="true" :colorCode="'G'" />
        <button @click="goToStart">Back</button>
    </div>
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
</style>