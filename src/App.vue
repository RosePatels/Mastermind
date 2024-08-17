<template>
  <StartScreen v-if="boardStore.screenState === 'Start'" />
  <InstructionsScreen v-if="boardStore.screenState === 'Instructions'" />
  <SettingsScreen v-else-if="boardStore.screenState === 'Settings'" />
  <Board v-else-if="boardStore.screenState === 'In Game'" />
  <EndGameScreen v-else-if="boardStore.screenState === 'Victory' || boardStore.screenState === 'Defeat'" />
</template>

<script setup>
import Board from "@/components/Board.vue";
import StartScreen from "./components/StartScreen.vue";
import EndGameScreen from "./components/EndGameScreen.vue";
import SettingsScreen from "./components/SettingsScreen.vue";
import InstructionsScreen from "./components/InstructionsScreen.vue";
import { useBoardStore } from "./store/BoardStore";

const boardStore = useBoardStore();
</script>

<style scoped>

</style>
