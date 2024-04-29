<template>
    <div class="container">
        <div class="box">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>

<style scoped>
.container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    width: 320px;
    /* max-height: min(100vh, 450px); */
    overflow-y: auto;
    scrollbar-width: none;
    box-sizing: border-box;
    padding: 35px;
    box-shadow: 0 0 20px -5px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    transition: box-shadow 200ms ease
}

.box:hover {
    box-shadow: 0 0 20px -5px rgba(0, 0, 0, 0.1);
}

.box :deep(h1) {
    /* position: sticky;
    top: 0;
    z-index: 1; */
    margin-bottom: 20px;
    /* background-color: #fff; */
}

/* .box :deep(h1::after) {
    content: "";
    position: absolute;
    top: -35px;
    left: 0;
    width: 100%;
    height: 35px;
    z-index: 1;
    background-color: #fff;
} */
</style>