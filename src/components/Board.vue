<template>
    <div class="mastermind-board-container">
        <div v-for="(row, index) of boardStore.board" :key="index" class="row-container">
            <div v-for="(colorCode, idx) of row" :key="`${index} ${idx}`">
                <Peg :colorCode="colorCode" class="row-peg" />
            </div>
        </div>
    </div>
    <div class="selection-pegs-container">
        <div v-for="colorCode of boardStore.selectionPegs" :key="colorCode" class="selection-peg">
            <Peg :colorCode="colorCode" />
        </div>
    </div>
</template>

<script setup>
import Peg from "./Peg.vue";
import { useBoardStore } from "@/store/BoardStore";
const boardStore = useBoardStore();

</script>

<style scoped>
.row-container {
    display: flex;
}

.row-peg {
    margin: 15px 10px;
    border: 2px solid #525252;
}

.selection-pegs-container {
    display: flex;
}

.selection-peg {
    margin: 5px 15px;
}
</style>