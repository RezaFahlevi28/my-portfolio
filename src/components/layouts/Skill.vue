<template>
  <section class="w-[86%] md:w-[80%] lg:w-[56%] mx-auto mt-10">
    <h1 class="font-medium text-base text-title dark:text-white">
      Skills and Tools
    </h1>

    <SkillGroup
      v-for="group in skillGroups"
      :key="group.title"
      :title="group.title"
      :items="group.items"
      :showIcon="group.showIcon"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import SkillGroup from "./SkillGroup.vue";

const skillGroups = ref([
  {
    title: "Design Tools",
    showIcon: true,
    items: [
      { logo: "figma.png", name: "Figma," },
      { logo: "canva.png", name: "Canva" },
    ],
  },
  {
    title: "Development",
    showIcon: true,
    items: [
      { logo: "html.png", name: "HTML," },
      { logo: "css.png", name: "CSS," },
      { logo: "javascript.png", name: "JavaScript," },
      { logo: "php.png", name: "PHP," },
      { logo: "python.png", name: "Python," },
      { logo: "dart.png", name: "Dart," },
      { logo: "tailwind.png", name: "TailwindCSS," },
      { logo: "vue.png", name: "Vue," },
      { logo: "node.png", name: "Node JS," },
      { logo: "laravel.png", name: "Laravel," },
      { logo: "flutter.png", name: "Flutter," },
      { logo: "postman.png", name: "Postman," },
      { logo: "vite.png", name: "Vite," },
      { logo: "docker.png", name: "Docker" },
    ],
  },
  {
    title: "Collaboration",
    showIcon: true,
    items: [
      { logo: "git.png", name: "Git," },
      { logo: "github.png", name: "Github," },
      { logo: "notion.png", name: "Notion," },
      { logo: "trello.png", name: "Trello" },
    ],
  },
  {
    title: "Design Expertise",
    showIcon: false,
    items: [
      { name: "UI/UX Design," },
      { name: "Design Systems," },
      { name: "Responsive Design" },
    ],
  },
  {
    title: "Soft Skills",
    showIcon: false,
    items: [
      { name: "Strong communication," },
      { name: "Problem-solving," },
      { name: "Attention to detail," },
      { name: "Time management" },
    ],
  },
]);
</script>
