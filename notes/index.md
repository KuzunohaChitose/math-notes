---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
navbar: false
hero:
  name: "Math Notes"
  text: "高等数学与线性代数的学习笔记"
  actions:
    - theme: brand
      text: Advanced Mathematics
      link: /advanced-mathematics/chapter1/section1
    - theme: brand
      text: Linear Algebra
      link: /linear-algebra/chapter1/section1
    - theme: alt
      text: Play Music
      link: "javascript:void(0)"
      id: player
---

<script setup>
import VideoBackground from "../src/components/VideoBackground.vue";
import { onMounted } from "vue";
import mdKatex from "markdown-it-katex";

onMounted(() => {
  console.log(mdKatex);
  console.log(2);
  document.querySelectorAll("a.VPButton")[1].addEventListener("click", (event) => {
    event.preventDefault();
    const audio = document.querySelector("#msc");
    if (audio.paused) audio.play();
    else audio.pause();
  });
});
</script>

<VideoBackground path="/math-notes/resources/chise.mp4" />
<audio src="/math-notes/resources/Blooming Moon.mp3" loop id="msc" />
