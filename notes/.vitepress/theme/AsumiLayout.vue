<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { computed, watch } from "vue";
import { useAsumiIndex, useScreenSize } from "./hooks";

const { page } = useData();
const size = useScreenSize();
const index = useAsumiIndex(page);
const show = computed(
    () => (i: number) =>
        i === index.value &&
        page.value.filePath !== "index.md" &&
        size.height >= 600 &&
        size.width >= 600 &&
        size.width / size.height >= 0.5 &&
        size.width / size.height <= 2
);

watch(page, (newVal, oldVal) => {
    if (newVal.filePath === "index.md" && oldVal?.filePath !== "index.md") {
        (<HTMLElement>document.lastChild).classList.add("dark");
        document.body.style.overflow = "hidden";
    }
    if (newVal.filePath !== "index.md" && oldVal?.filePath === "index.md") {
        (<HTMLElement>document.lastChild).classList.remove("dark");
        document.body.style.overflow = "auto";
    }
}, { immediate: true });
</script>

<template>
    <img
        v-for="i in [1, 2, 3, 4, 5]"
        :key="i === index ? `${i}-show` : `${i}-hide`"
        :src="`/math-notes/resources/asumi/${i}.png`"
        class="asumi"
        v-show="show(i)"
    />
    <DefaultTheme.Layout />
</template>

<style>
.asumi {
    position: fixed;
    bottom: 0;
    right: 0;
    height: 75%;
    opacity: 1;
}
</style>
