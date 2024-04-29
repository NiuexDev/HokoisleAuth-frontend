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
    box-sizing: border-box;
    padding: 35px;
    box-shadow: 0 0 20px -5px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    transition: box-shadow 200ms ease
}

.box:hover {
    box-shadow: 0 0 20px -5px rgba(0, 0, 0, 0.1);
}
</style>