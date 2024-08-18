<template>
    <div>
        <div v-if="boardStore.screenState === 'Victory'" class="end-game-state victory">
            Victory
        </div>
        
        <div v-else-if="boardStore.screenState === 'Defeat'" class="end-game-state defeat">
            Defeat
        </div>
        
        <div class="end-game-buttons-container">
            <button @click="restartGame">Play again</button>
            <button @click="goToStart">Home</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useBoardStore } from '@/store/BoardStore';

const boardStore = useBoardStore();

const restartGame = () => {
    boardStore.initializeNewGame();
    boardStore.screenState = 'In Game'
};
const goToStart = () => boardStore.screenState = 'Start';

</script>

<style scoped>
.end-game-state {
    letter-spacing: 2px;
    font-size: 2.5em;
    padding-bottom: 1em;
    text-align: center;
    text-shadow: 3px 3px 5px #bfbfbf;
}

.victory {
    color: #48c859;
}

.defeat {
    color: #e41c1c;
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

.end-game-buttons-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>