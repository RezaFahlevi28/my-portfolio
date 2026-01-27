<template>
  <div class="mt-5 flex flex-col md:flex-row gap-3 md:gap-5">
    <p class="text-bodyText dark:text-bodyDark text-sm min-w-[130px]">
      {{ title }} :
    </p>

    <div class="flex flex-wrap gap-3">
      <div
        v-for="item in items"
        :key="item.name"
        class="flex items-center gap-2"
      >
        <img
          v-if="showIcon"
          :src="`/images/tools/${item.logo}`"
          :alt="item.name"
          class="w-4 h-5 object-contain"
        />
        <p class="text-title dark:text-white text-sm">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: Array,
  showIcon: Boolean,
});
</script>
