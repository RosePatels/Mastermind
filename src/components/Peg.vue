<template>
    <div :style="{ 'background-color': keyPeg && colorCode === 'W' ? 'rgb(138 138 138)' :  boardStore.colorMap[colorCode] }" :class="{ 'peg': !keyPeg, 'key-peg': keyPeg }">
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
    keyPeg: {
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
    box-shadow: 2px 2px 5px #cccbcb;
}

.key-peg {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    box-shadow: 2px 2px 4px #bfbfbf;
}
</style>