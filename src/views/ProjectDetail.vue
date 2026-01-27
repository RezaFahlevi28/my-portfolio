<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import projects from "@/assets/data/projects.json";

const route = useRoute();
const router = useRouter();

// ambil project berdasarkan slug
const project = computed(() =>
  projects.find((p) => p.slug === route.params.slug)
);

// redirect kalau slug tidak ada
watch(project, (val) => {
  if (!val) router.replace("/projects");
});

// ===== Carousel =====
const currentIndex = ref(0);

watch(
  () => route.params.slug,
  () => (currentIndex.value = 0)
);

const nextSlide = () => {
  if (!project.value) return;
  currentIndex.value = (currentIndex.value + 1) % project.value.porto.length;
};

const prevSlide = () => {
  if (!project.value) return;
  currentIndex.value =
    (currentIndex.value - 1 + project.value.porto.length) %
    project.value.porto.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};
</script>

<template>
  <section
    v-if="project"
    class="w-[90%] md:w-[80%] lg:w-[60%] mx-auto mt-12 mb-14"
  >
    <!-- Title -->
    <h1 class="text-center text-2xl font-medium text-title dark:text-white">
      {{ project.name }}
    </h1>

    <!-- Info -->
    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Left -->
      <div class="space-y-7">
        <div class="flex flex-wrap gap-10">
          <div>
            <p class="text-sm text-bodyText">Client</p>
            <p class="font-medium text-title dark:text-white">
              {{ project.client }}
            </p>
          </div>

          <div>
            <p class="text-sm text-bodyText">Date</p>
            <p class="font-medium text-title dark:text-white">
              {{ project.date }}
            </p>
          </div>
        </div>

        <div>
          <p class="text-sm text-bodyText">Tech Stack</p>
          <div class="flex flex-wrap gap-3 mt-2">
            <img
              v-for="tool in project.tools"
              :key="tool"
              class="w-6 h-6 object-contain"
              :src="`/images/tools/${tool}`"
              :alt="tool"
            />
          </div>
        </div>

        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          class="inline-flex items-center gap-2 text-sm bg-primary px-6 py-2 text-white rounded-lg shadow-lg hover:opacity-90 transition"
        >
          <Icon icon="lsicon:view-filled" height="16" />
          Visit Site
        </a>
        <a
          v-if="!project.link"
          class="inline-flex items-center gap-2 text-sm bg-gray-400 px-6 py-2 text-white rounded-lg shadow-lg hover:opacity-90 transition cursor-not-allowed"
        >
          <Icon icon="lsicon:view-filled" height="16" />
          Visit Site
        </a>
      </div>

      <!-- Right -->
      <p class="text-bodyText dark:text-bodyDark leading-relaxed">
        {{ project.deskripsi }}
      </p>
    </div>

    <!-- Carousel -->
    <div class="mt-14 relative">
      <div class="overflow-hidden rounded-xl">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <img
            v-for="img in project.porto"
            :key="img"
            :src="`/images/projects/${img}`"
            :alt="project.name"
            class="w-full flex-shrink-0 h-[240px] sm:h-[360px] md:h-[520px] object-cover"
          />
        </div>
      </div>

      <!-- Controls -->
      <button
        @click="prevSlide"
        class="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/60"
      >
        <Icon icon="weui:arrow-outlined" height="16" style="rotate: 180deg" />
      </button>

      <button
        @click="nextSlide"
        class="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/60"
      >
        <Icon icon="weui:arrow-outlined" height="16" />
      </button>

      <!-- Dots -->
      <div class="flex justify-center gap-2 mt-4">
        <button
          v-for="(_, index) in project.porto"
          :key="index"
          @click="goToSlide(index)"
          class="w-2.5 h-2.5 rounded-full transition"
          :class="
            index === currentIndex
              ? 'bg-primary'
              : 'bg-gray-300 dark:bg-gray-600'
          "
        />
      </div>
    </div>
  </section>
</template>
