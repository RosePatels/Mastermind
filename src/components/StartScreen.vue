<template>
    <h2>Mastermind</h2>
    <div class="start-screen-buttons-container">
        <button @click="startGame">Play</button>
        <button @click="goToInstructions">Instructions</button>
        <button @click="goToSettings">Settings</button>
    </div>
</template>

<script setup lang="ts">
import { useBoardStore } from '@/store/BoardStore';
const boardStore = useBoardStore();

const startGame = () => {
    boardStore.initializeNewGame();
    boardStore.screenState = 'In Game'
};
const goToInstructions = () => boardStore.screenState = 'Instructions';
const goToSettings = () => boardStore.screenState = 'Settings';
</script>

<style scoped>
h2 {
    letter-spacing: 2px;
    font-size: 2.5em;
    padding-bottom: 1em;
    color: #042297;
		text-shadow: 3px 3px 5px #bfbfbf;
}

button {
  background-color: #26bee9;
	border: none;
	color: #D6F6FF;
	width: 224px;
	padding: 20px 0px;
	text-align: center;
	font-size: 16px;
	cursor: pointer;
	transition: 200ms;
	margin: 7px;
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

.start-screen-buttons-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>