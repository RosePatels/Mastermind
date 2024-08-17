<template>
    <div>Instructions to be added.</div>
    <button @click="goToStart">Back</button>
</template>

<script setup lang="ts">
import { useBoardStore } from '@/store/BoardStore'; 

const boardStore = useBoardStore();

const goToStart = () => boardStore.screenState = 'Start';
</script>

<style scoped>

</style>