<script setup>
import { computed } from "vue";
import projects from "@/assets/data/projects.json";

const featuredProjects = computed(() => projects.slice(0, 3));
</script>
<template>
  <section id="projects" class="w-[86%] md:w-[80%] lg:w-[56%] mx-auto mt-10">
    <div class="title flex justify-between items-center">
      <h1 class="font-medium text-base text-title dark:text-white">Projects</h1>
      <RouterLink
        :to="`/projects/`"
        class="text-sm text-bodyText flex items-center gap-1 rounded-md px-2 py-1 transition hover:bg-gray-100"
        >View all
        <Icon
          icon="mingcute:arrow-right-fill"
          :height="14"
          class="text-bodyText"
      /></RouterLink>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-7">
      <RouterLink
        v-for="project in featuredProjects"
        :key="project.slug"
        :to="`/projects/${project.slug}`"
        class="block group"
      >
        <div
          class="card border border-[#E8EAED] dark:border-[#1F2937] bg-[#FBFBFC] dark:bg-[#0D131F] rounded-xl overflow-hidden group"
        >
          <div class="overflow-hidden">
            <div class="relative h-[176px] overflow-hidden rounded-t-xl">
              <div
                class="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110 group-hover:blur-[2px]"
                :style="{
                  backgroundImage: `url(/images/projects/${project.cover})`,
                }"
              ></div>
              <div
                class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"
              ></div>
              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 backdrop-blur-xs"
              >
                <div class="flex items-center justify-center gap-2">
                  <Icon
                    icon="lsicon:view-filled"
                    :height="16"
                    class="text-white dark:text-bodyDark"
                  />
                  <span class="text-white text-sm">View Detail</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body pt-4 px-4">
            <h5 class="text-title dark:text-white text-base font-medium">
              {{ project.name }}
            </h5>
            <p
              class="line-clamp-3 text-bodyText dark:text-[#F9FAFB] text-sm mt-1"
            >
              {{ project.deskripsi }}
            </p>
          </div>
          <div
            class="card-footer flex gap-3 border-t border-[#E8EAED] dark:border-[#1F2937] mx-4 mt-2 pt-2 pb-2"
          >
            <img
              v-for="tool in project.tools"
              :key="tool"
              class="w-5 h-5 object-contain"
              :src="`/images/tools/${tool}`"
              :alt="tool"
            />
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
