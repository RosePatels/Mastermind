<template>
    <h2>Mastermind</h2>
    <button @click="startGame">Play</button>
    <button @click="goToInstructions">Instructions</button>
    <button @click="goToSettings">Settings</button>
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

</style>