<script setup>
import { defineAsyncComponent } from "vue";
const Navbar = defineAsyncComponent(() =>
  import("@/components/layouts/Navbar.vue")
);
const Footer = defineAsyncComponent(() =>
  import("@/components/layouts/Footer.vue")
);
</script>

<template>
  <div class="bg-[#fff] dark:bg-[#08091A] min-h-screen pt-10">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
