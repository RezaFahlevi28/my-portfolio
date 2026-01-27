<template>
  <section id="work" class="w-[86%] md:w-[80%] lg:w-[56%] mx-auto mt-10">
    <h1 class="font-medium text-base text-title dark:text-white">
      Work Experience
    </h1>

    <div class="relative mt-8 pl-8">
      <span
        class="absolute left-[26px] top-0 h-full w-px bg-gray-200 dark:bg-gray-700"
      ></span>

      <article v-for="work in works" :key="work.jobName" class="relative mb-10">
        <div
          class="absolute -left-[16px] top-0 w-6 h-6 rounded-full bg-white dark:bg-[#080326] border border-gray-300 dark:border-gray-600 flex items-center justify-center"
        >
          <img
            :src="`/images/${work.logo}`"
            :alt="work.company"
            class="w-4 h-4 object-contain"
          />
        </div>
        <div class="ml-8 flex flex-col gap-1">
          <span class="text-xs text-bodyText">
            {{ work.period }}
          </span>

          <h3 class="text-sm font-semibold text-title dark:text-white">
            {{ work.jobName }}
          </h3>

          <p class="text-xs text-[#0B0A2F] dark:text-gray-300">
            {{ work.company }}
          </p>

          <p
            v-if="work.description"
            class="text-sm text-bodyText leading-relaxed mt-1"
          >
            {{ work.description }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const works = ref([
  {
    period: "Aug 2025 - Present",
    logo: "usk.png",
    jobName: "Data Manager",
    company: "Syiah Kuala University - Contract",
    description:
      "Managing MBKM academic and operational data, validating and updating data, and maintaining the USK MBKM website to ensure optimal performance.",
  },
  {
    period: "Mar 2023 - Apr 2023",
    logo: "bps.png",
    jobName: "Web Developer",
    company: "Badan Pusat Statistik Aceh - Intern",
    description:
      "During my internship at BPS Aceh Province, I collaborated in the development of a poverty alleviation monitoring web application using Laravel. The development process starts from designing ERD, creating low-fidelity prototypes, to implementing functional features for data analysis and visualization.",
  },
  {
    period: "Aug 2022 - Jun 2023",
    logo: "usk.png",
    jobName: "Computer Lab Assistant",
    company: "Syiah Kuala University - Part Time",
    description:
      "As a Computer Laboratory Assistant, I guided students in programming and database management while promoting good coding practices. I taught Python fundamentals, OOP principles, and database design with SQL, and conducted code reviews to provide constructive feedback and improve students’ technical skills.",
  },
  {
    period: "Sep 2021 - Des 2023",
    logo: "smp.png",
    jobName: "Extracurricular Web Programming Instructor",
    company: "SMP Plus Al-Athiyah - Part Time",
    description:
      "As an extracurricular web programming instructor at the junior high school level, I taught the fundamentals of web development, including HTML, CSS, and JavaScript, through hands-on projects such as landing pages and simple portfolios. I facilitated code reviews and debugging, developed engaging learning materials, and fostered students’ creativity, logical thinking, and early interest in web development.",
  },
  {
    period: "2020 - Present",
    logo: "freelancer.png",
    jobName: "Freelancer Web Developer",
    company: "Part Time",
    description:
      "Experienced in working on freelance website projects, from design to deployment, with a focus on functionality and user experience.",
  },
]);
</script>
