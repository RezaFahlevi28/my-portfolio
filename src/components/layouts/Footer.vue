<script setup>
import { Icon } from "@iconify/vue";
</script>
<template>
  <footer
    class="w-[86%] md:w-[80%] lg:w-[56%] mx-auto pb-10 border-t pt-8 px-4 flex justify-between"
  >
    <p class="dark:text-white">2026 | Reza Fahlevi</p>
    <div class="flex gap-3">
      <a
        href="https://www.instagram.com/rz.fahlevi10/"
        target="_blank"
        class="p-[10px] rounded-full border border-[#0B0A2F] dark:border-[#F9FAFB] dark:hover:border-primary hover:bg-primary hover:border-primary group"
      >
        <Icon
          icon="mdi:instagram"
          :height="16"
          class="text-[#0B0A2F] dark:text-bodyDark group-hover:text-white"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/reza-fahlevi-501b5b219/"
        target="_blank"
        class="p-[10px] rounded-full border border-[#0B0A2F] dark:border-[#F9FAFB] dark:hover:border-primary hover:bg-primary hover:border-primary group"
      >
        <Icon
          icon="mingcute:linkedin-line"
          :height="16"
          class="text-[#0B0A2F] dark:text-bodyDark group-hover:text-white"
        />
      </a>
      <a
        href="https://github.com/rezafahlevi08"
        target="_blank"
        class="p-[10px] rounded-full border border-[#0B0A2F] dark:border-[#F9FAFB] dark:hover:border-primary hover:bg-primary hover:border-primary group"
      >
        <Icon
          icon="icon-park-outline:github"
          :height="16"
          class="text-[#0B0A2F] dark:text-bodyDark group-hover:text-white"
        />
      </a>
    </div>
  </footer>
</template>
