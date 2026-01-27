<script setup>
import projects from "@/assets/data/projects.json";
</script>

<template>
  <section class="w-[86%] md:w-[80%] lg:w-[56%] mx-auto mt-10">
    <h1 class="text-title dark:text-white text-2xl font-medium text-center">
      Projects
    </h1>

    <p class="text-sm text-bodyText text-center mt-1">
      A selection of projects showcasing my experience in web development,
      system design, and problem-solving.
    </p>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-10"
    >
      <RouterLink
        v-for="project in projects"
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
