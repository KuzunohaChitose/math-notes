---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
navbar: false
hero:
    name: "Math Notes"
    text: "Some knowledge of further mathematics."
    actions:
        - theme: brand
          text: Getting Start
          link: /quick-start
        - theme: alt
          text: Play Music
          link: "javascript:void(0)"
          id: player
---

<script setup>
import VideoBackground from "../src/components/VideoBackground.vue";
import { onMounted } from "vue";

onMounted(() => {
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
