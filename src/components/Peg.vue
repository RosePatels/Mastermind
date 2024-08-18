<template>
    <div :style="{ 'background-color': selectionPeg && colorCode === 'W' ? 'rgb(138 138 138)' :  boardStore.colorMap[colorCode] }" :class="{ 'peg': !selectionPeg, 'selection-peg': selectionPeg }">
    </div>
</template>

<script setup>
import { ref } from "vue";
import {  useBoardStore } from "@/store/BoardStore";

const boardStore = useBoardStore();


const props = defineProps({
    colorCode: {
        type: String,
        default: 'W'
    },
    selectionPeg: {
        type: Boolean,
        default: false
    }
});


</script>

<style scoped>
.peg {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: #000000;
}

.selection-peg {
    width: 1em;
    height: 1em;
    border-radius: 50%;
}
</style>