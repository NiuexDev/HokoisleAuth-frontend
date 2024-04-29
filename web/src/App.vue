<script setup lang="ts">
import { RouterView } from 'vue-router'
import { NConfigProvider, type GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
    common: {
        borderRadius: '15px',
        primaryColor: '#65A018FF',
        primaryColorHover: '#87AD36FF',
        primaryColorPressed: '#4A7A0CFF',
        primaryColorSuppl: '#83AD36FF'
    }
}
</script>

<template>
    <n-config-provider class="container" :theme-overrides="themeOverrides">
        <RouterView />
    </n-config-provider>
</template>