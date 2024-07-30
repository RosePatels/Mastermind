<template>
    <div class="peg" :style="{ 'background-color': colorMap[colorCode] }">
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    colorCode: {
        type: String,
        default: 'W'
    }
});

//Colors from PastelColorPalettes
const colorMap = ref({
    'R': "#FA9189",
    'O': "#FCAE7C",
    "DY": "#FFE699",
    "LY": "#F9FFB5",
    "G": "#B3F5BC",
    "B": "#D6F6FF",
    "Pu": "#E2CBF7",
    "Li": "#D1BDFF",
    "W": "#FFFFFF",
    "Bk": "#000000"
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