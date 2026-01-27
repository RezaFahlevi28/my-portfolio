<template>
  <section class="w-[86%] md:w-[80%] lg:w-[56%] mx-auto mt-10">
    <div class="title">
      <h1 class="font-medium text-base text-title dark:text-white">
        Skills and Tools
      </h1>
    </div>
    <div class="mt-7 flex flex-col md:flex-row gap-3 md:gap-5">
      <div>
        <p class="text-bodyText text-sm">Design Tools :</p>
      </div>
      <div v-for="item in Design" :key="item.name" class="flex gap-1">
        <img
          :src="`/src/assets/images/tools/${item.logo}`"
          :alt="item.name"
          class="w-4 h-5 object-contain"
        />
        <p class="text-bodyText text-sm">{{ item.name }}</p>
      </div>
    </div>
    <div class="mt-4 flex flex-col md:flex-row gap-3 md:gap-5">
      <div>
        <p class="text-bodyText text-sm">Development :</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <div v-for="item in Development" :key="item.name" class="flex gap-1">
          <img
            :src="`/src/assets/images/tools/${item.logo}`"
            :alt="item.name"
            class="w-4 h-5 object-contain"
          />
          <p class="text-bodyText text-sm">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="mt-4 flex flex-col md:flex-row gap-3 md:gap-5">
      <div>
        <p class="text-bodyText text-sm">Collaboration :</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <div v-for="item in Collaboration" :key="item.name" class="flex gap-1">
          <img
            :src="`/src/assets/images/tools/${item.logo}`"
            :alt="item.name"
            class="w-4 h-5 object-contain"
          />
          <p class="text-bodyText text-sm">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="mt-4 flex flex-col md:flex-row gap-3 md:gap-5">
      <div>
        <p class="text-bodyText text-sm">Design Expertise :</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <div v-for="item in DesignExpert" :key="item.name" class="flex gap-1">
          <p class="text-bodyText text-sm">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="mt-4 flex flex-col md:flex-row gap-3 md:gap-5">
      <div>
        <p class="text-bodyText text-sm">Soft Skills :</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <div v-for="item in SoftSkill" :key="item.name" class="flex gap-1">
          <p class="text-bodyText text-sm">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <!-- <div class="flex flex-col gap-4">
        <p class="text-bodyText text-sm">Design Tools :</p>
        <p class="text-bodyText text-sm">Development :</p>
        <p class="text-bodyText text-sm">Collaboration :</p>
        <p class="text-bodyText text-sm">Design Expertise :</p>
        <p class="text-bodyText text-sm">Soft Skills :</p>
      </div>
      <div class="flex flex-col gap-4">
        <div v-for="item in Design" :key="item.name" class="flex gap-1">
          <img
            :src="`/src/assets/images/tools/${item.logo}`"
            :alt="item.name"
            class="w-4 h-5 object-contain"
          />
          <p class="text-bodyText text-sm">{{ item.name }}</p>
        </div>
        <div class="flex gap-2">
          <div v-for="item in Development" :key="item.name" class="flex gap-1">
            <img
              :src="`/src/assets/images/tools/${item.logo}`"
              :alt="item.name"
              class="w-4 h-5 object-contain"
            />
            <p class="text-bodyText text-sm">{{ item.name }}</p>
          </div>
        </div>
        <div class="flex gap-2">
          <div
            v-for="item in Collaboration"
            :key="item.name"
            class="flex gap-1"
          >
            <img
              :src="`/src/assets/images/tools/${item.logo}`"
              :alt="item.name"
              class="w-4 h-5 object-contain"
            />
            <p class="text-bodyText text-sm">{{ item.name }}</p>
          </div>
        </div>
        <div class="flex gap-2">
          <div v-for="item in DesignExpert" :key="item.name" class="flex gap-1">
            <p class="text-bodyText text-sm">{{ item.name }}</p>
          </div>
        </div>
        <div class="flex gap-2">
          <div v-for="item in SoftSkill" :key="item.name" class="flex gap-1">
            <p class="text-bodyText text-sm">{{ item.name }}</p>
          </div>
        </div>
      </div> -->
    <!-- </div> -->
  </section>
</template>

<script setup>
import { ref } from "vue";

const Design = ref([{ logo: "figma.png", name: "Figma" }]);

const Development = ref([
  { logo: "html.png", name: "HTML," },
  { logo: "css.png", name: "CSS," },
  { logo: "tailwind.png", name: "TailwindCSS," },
  { logo: "vue.png", name: "Vue," },
  { logo: "node.png", name: "Node JS," },
  { logo: "laravel.png", name: "Laravel," },
  { logo: "postman.png", name: "Postman" },
]);

const Collaboration = ref([
  { logo: "github.png", name: "Github," },
  { logo: "notion.png", name: "Notion," },
  { logo: "trello.png", name: "Trello," },
]);

const DesignExpert = ref([
  { name: "UI/UX Design," },
  { name: "Design Systems," },
  { name: "Responsive Design" },
]);

const SoftSkill = ref([
  { name: "Strong communication," },
  { name: "Problem-solving," },
  { name: "Attention to detail," },
  { name: "Time management" },
]);
</script>
