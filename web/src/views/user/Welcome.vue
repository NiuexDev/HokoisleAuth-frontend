<template>
    <div class="container">
        <div class="box">
            <n-tabs animated :value="step">
                <n-tab-pane :name="1" display-directive="show">
                    <h1>欢迎使用{{ "呃 呃" }}！</h1>
                    <h1>让我们来进行一些初始化设置</h1>
                    <p>114</p>
                    <n-flex class="button" :size="12" justify="end">
                        <n-button tertiary round @click="skip()">跳过</n-button>
                        <n-button type="primary" secondary round @click="nextStep()">下一步</n-button>
                    </n-flex>
                </n-tab-pane>

                <n-tab-pane :name="2" display-directive="show">
                    <h1>2</h1>
                    <p>514</p>
                    
                    <n-flex class="button" :size="12" justify="space-between">
                        <n-button tertiary round @click="prevStep()">上一步</n-button>
                        <n-button type="primary" secondary round @click="nextStep()">下一步</n-button>
                    </n-flex>
                </n-tab-pane>
            </n-tabs>

        </div>
        <div class="bg"></div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { NTabPane, NTabs, NFlex, NButton } from "naive-ui"
import { useRouter } from "vue-router"

const router = useRouter()

const step = ref(1)

const skip = () => {
    router.replace("/user")
}

const prevStep = () => {
    step.value = step.value <= 0? step.value = 0: step.value-1
}

const nextStep = () => {
    step.value++
}
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
    background: url(@a/img/Girls_Band_Cry_KV2.webp);
    background-position: center;
    background-repeat: repeat-x;
    background-size: contain;
    z-index: -1;
}

.box {
    width: min(440px, 100%);
    max-height: 100%;
    overflow-y: hidden;
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

.box :deep(.n-tabs-pane-wrapper) {
    overflow: visible;
}

.box :deep(.n-tabs-nav-scroll-wrapper) {
    display: none !important;
}

.box :deep(.n-tab-pane) {
    padding: 0 !important;
}

.button {
    margin-top: 16px;
}
</style>