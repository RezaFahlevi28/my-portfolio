<template>
  <section class="w-[86%] md:w-[80%] lg:w-[56%] mx-auto mt-10">
    <div class="title">
      <h1 class="font-medium text-base text-title dark:text-white">
        Education
      </h1>
    </div>
    <div
      class="cards mt-5"
      v-for="education in Educations"
      :key="education.name"
    >
      <div
        class="card border border-[#E7E9ED] hover:border-primary dark:border-[#1F2937] w-full md:w-[270px] rounded-xl py-4 px-5 transition-colors duration-300"
      >
        <img
          :src="`/images/${education.logo}`"
          alt="logo usk"
          class="w-8"
        />
        <p class="text-bodyText dark:text-bodyDark text-xs mt-2">
          {{ education.year }}
        </p>
        <h3 class="text-title dark:text-white text-sm font-semibold mt-1">
          {{ education.name }}
        </h3>
        <h4 class="text-bodyText dark:text-bodyDark text-sm mt-1">
          {{ education.univ }}
        </h4>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const Educations = ref([
  {
    logo: "usk.png",
    year: "2020 - 2024",
    name: "Bachelor’s degree in Computer Engineering",
    univ: "Syiah Kuala University",
  },
]);
</script>
