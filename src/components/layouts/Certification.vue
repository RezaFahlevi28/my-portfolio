<template>
  <section class="w-[86%] md:w-[80%] lg:w-[56%] mx-auto mt-14">
    <div class="title">
      <h1 class="font-medium text-base text-title dark:text-white">
        Licenses & Certifications
      </h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
      <div
        v-for="cert in certifications"
        :key="cert.id"
        class="card border border-[#E7E9ED] dark:border-[#1F2937] w-full rounded-xl py-4 px-5 flex flex-col justify-between hover:border-primary transition-colors duration-300"
      >
        <div class="flex items-start gap-4">
          <div
            class="w-10 h-10 flex-shrink-0 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden"
          >
            <img
              :src="`/images/${cert.logo}`"
              :alt="cert.issuer"
              class="w-full h-full object-contain p-1"
              @error="(e) => (e.target.src = 'https://via.placeholder.com/40')"
            />
          </div>
          <div class="flex-1">
            <h3
              class="text-title dark:text-white text-sm font-semibold leading-tight"
            >
              {{ cert.name }}
            </h3>
            <p class="text-bodyText dark:text-bodyDark text-xs mt-1">
              {{ cert.issuer }}
            </p>
            <p class="text-bodyText dark:text-bodyDark text-[10px] mt-0.5">
              Issued {{ cert.issueDate }}
            </p>
          </div>
        </div>
        <div class="mt-4 flex justify-end">
          <a
            v-if="cert.link"
            :href="cert.link"
            target="_blank"
            class="text-xs font-medium text-primary hover:text-primary/80 flex items-center gap-1"
          >
            Show credential
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
              />
              <path
                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import certifications from "@/assets/data/certifications.json";
</script>
