<template>
<div v-if="boardStore.screenState === 'Victory'">
    Victory
</div>

<div v-else-if="boardStore.screenState === 'Defeat'">
    Defeat
</div>

<div>
    <button @click="restartGame">Play again</button>
    <button @click="goToStart">Home</button>
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

</style>