<template>
  <div class="main">
    <div class="game-container rubik-mono-one-regular">
      <StartScreen v-if="boardStore.screenState === 'Start'" />
      <InstructionsScreen v-if="boardStore.screenState === 'Instructions'" />
      <SettingsScreen v-else-if="boardStore.screenState === 'Settings'" />
      <Board v-else-if="boardStore.screenState === 'In Game'" />
      <EndGameScreen v-else-if="boardStore.screenState === 'Victory' || boardStore.screenState === 'Defeat'" />
    </div>
  </div>
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
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.game-container {
  display: flex;
  flex-direction: column;
}
</style>


<style>
.rubik-mono-one-regular {
  font-family: "Rubik Mono One", monospace;
  font-weight: 400;
  font-style: normal;
}

.main {
  background: #fefbea;
}
</style>