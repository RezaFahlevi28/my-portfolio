<template>
  <header
    class="sticky top-5 w-[92%] sm:w-[88%] md:w-[80%] lg:w-[60%] mx-auto z-50 border border-gray-200 dark:border-[#1F2937] rounded-full backdrop-blur-md bg-white/70 dark:bg-[#0B0A2F]/60"
  >
    <nav class="flex items-center justify-between h-16 px-4 sm:px-6">
      <!-- Logo -->
      <RouterLink
        to="/"
        class="text-2xl font-bold text-[#0B0A2F] dark:text-white"
      >
        R.
      </RouterLink>

      <!-- Mobile Toggle -->
      <button class="md:hidden z-30 text-2xl" @click="isMenuOpen = !isMenuOpen">
        <Icon
          :icon="
            isMenuOpen ? 'material-symbols:close' : 'material-symbols:menu'
          "
        />
      </button>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="item in menu" :key="item.id">
          <!-- <button
            @click="scrollTo(item.id)"
            class="text-[#0B0A2F] dark:text-white hover:text-primary dark:hover:text-primary transition py-5 border-b-2 border-transparent hover:border-primary"
          >
            {{ item.name }}
          </button> -->
          <button
            @click="scrollTo(item.id)"
            :class="[
              'transition py-5 border-b-2',
              activeSection === item.id
                ? 'text-primary border-primary'
                : 'text-[#0B0A2F] dark:text-white border-transparent hover:text-primary hover:border-primary',
            ]"
          >
            {{ item.name }}
          </button>
        </li>
      </ul>

      <!-- Theme Toggle -->
      <button
        @click="toggleDarkMenu"
        class="hidden md:block p-2 rounded-full border bg-[#0B0A2F] hover:bg-gray-100 transition group"
      >
        <Icon
          :icon="isDarkMenu ? 'line-md:sunny-outline' : 'line-md:moon-filled'"
          class="text-white group-hover:text-[#0B0A2F]"
        />
      </button>
    </nav>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="absolute z-50 w-full md:hidden mt-2 bg-white dark:bg-[#0B0A2F] border border-gray-200 dark:border-[#1F2937] rounded-xl px-6 py-4"
      >
        <ul class="flex flex-col gap-4">
          <li v-for="item in menu" :key="item.id">
            <!-- <button
              @click="scrollTo(item.id)"
              class="w-full text-left text-base font-medium text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary"
            >
              {{ item.name }}
            </button> -->
            <button
              @click="scrollTo(item.id)"
              :class="[
                'w-full text-left text-base font-medium transition',
                activeSection === item.id
                  ? 'text-primary'
                  : 'text-gray-800 dark:text-white hover:text-primary',
              ]"
            >
              {{ item.name }}
            </button>
          </li>

          <!-- Theme Toggle Mobile -->
          <button
            @click="toggleDarkMenu"
            class="mt-2 p-2 w-full border rounded-lg flex items-center justify-center gap-2"
          >
            <Icon
              :icon="
                isDarkMenu ? 'line-md:sunny-outline' : 'line-md:moon-filled'
              "
            />
            Toggle Theme
          </button>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

const router = useRouter();
const route = useRoute();

const activeSection = ref("home");
const isMenuOpen = ref(false);

const menu = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "projects" },
  { name: "Work", id: "work" },
  { name: "Contact", id: "contact" },
];

/* =========================
   SCROLL TO SECTION
========================= */
const scrollTo = async (id) => {
  isMenuOpen.value = false;

  // Kalau bukan di home → pindah dulu
  if (route.path !== "/") {
    await router.push("/");
    await nextTick();
  }

  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.pageYOffset - 100;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

/* =========================
   SCROLL SPY (HOME ONLY)
========================= */
const handleScroll = () => {
  if (route.path !== "/") return;

  // Check if we are at the bottom of the page
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 50 // buffer of 50px
  ) {
    activeSection.value = menu[menu.length - 1].id;
    return;
  }

  const offset = 120;

  for (const item of menu) {
    const section = document.getElementById(item.id);
    if (!section) continue;

    const top = section.offsetTop - offset;
    const bottom = top + section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < bottom) {
      activeSection.value = item.id;
      break;
    }
  }
};

/* =========================
   ROUTE-BASED ACTIVE MENU
========================= */
watch(
  () => route.path,
  (path) => {
    if (path === "/projects" || path.startsWith("/projects/")) {
      activeSection.value = "projects";
    } else if (path === "/") {
      activeSection.value = "home";
    }
  },
  { immediate: true }
);

/* =========================
   DARK MODE
========================= */
const isDarkMenu = ref(localStorage.getItem("theme") === "dark");

const toggleDarkMenu = () => {
  isDarkMenu.value = !isDarkMenu.value;
  document.documentElement.classList.toggle("dark", isDarkMenu.value);
  localStorage.setItem("theme", isDarkMenu.value ? "dark" : "light");
};

/* =========================
   LIFECYCLE
========================= */
onMounted(() => {
  if (isDarkMenu.value) {
    document.documentElement.classList.add("dark");
  }

  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
