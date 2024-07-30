<template>
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
.selection-pegs-container {
    display: flex;
}

.selection-peg {
    margin: 5px 15px;
}
</style>