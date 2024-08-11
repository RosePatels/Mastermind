<template>
    <div class="peg" :style="{ 'background-color': boardStore.colorMap[colorCode] }">
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
    }
});


</script>

<style scoped>
.peg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #000000;
}
</style>