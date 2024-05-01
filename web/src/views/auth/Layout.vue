<template>
    <div class="container">
        <div class="box">
            <RouterView></RouterView>
        </div>
        <div class="bg"></div>
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

.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(https://www.themoviedb.org/t/p/original/igc9fZkqE65teFzbQKFAtAy6G1B.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
}

.box {
    width: min(320px, 100%);
    max-height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 35px;
    box-shadow: 0 0 20px -5px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    transition: box-shadow 200ms ease
}

@supports (backdrop-filter: blur(10px)) {
    .box {
        background-color: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
    }
}
@supports not (backdrop-filter: blur(10px)) {
    .box {
        background-color: #fff;
    }
}


.box:hover {
    box-shadow: 0 0 20px -5px rgba(0, 0, 0, 0.1);
}

.box :deep(h1) {
    margin-bottom: 15px;
}

.box :deep(.submit) {
    margin-bottom: 17px;
}
</style>