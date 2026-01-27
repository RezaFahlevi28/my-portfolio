<script setup>
import { Icon } from "@iconify/vue";
</script>
<template>
  <section id="home" class="w-[86%] md:w-[80%] lg:w-[56%] mx-auto mt-10">
    <main>
      <section class="flex gap-5 items-center">
        <div
          class="bg-[#FFE4F2] dark:bg-primary w-20 h-20 rounded-full overflow-hidden"
        >
          <img src="/images/hero.png" alt="Profile" />
        </div>
        <div>
          <h2 class="text-[#0B0A2F] dark:text-white font-medium text-lg">
            Reza Fahlevi, S.T.
          </h2>
          <p class="text-bodyText dark:text-bodyDark text-sm">
            Software Developer
          </p>
        </div>
      </section>
      <section class="mt-6">
        <div>
          <!-- <p class="text-bodyText text-sm dark:text-bodyDark">
            My name is reza fahlevi i come from indonesia, currently i am
            studying at syiah kuala university and majoring in computer
            engineering, because i am very interested in web development and
            design, therefore i work as a freelancer to be able to earn from
            what i like, so I hope to be able to collaborate to make something
            great with you
          </p> -->
          <p class="text-bodyText text-sm dark:text-bodyDark">
            A Web Developer and Data Manager based in Indonesia with experience
            in developing and maintaining web-based systems in academic and
            organizational environments. I work with modern web technologies and
            relational databases, focusing on developing responsive, scalable,
            and maintainable applications.
          </p>
          <p class="text-bodyText text-sm dark:text-bodyDark mt-1">
            In addition to web development, I have experience in managing and
            validating data, integrating APIs, and optimizing system workflows
            to ensure data accuracy and system reliability. I enjoy working on
            projects that require a balance between technical implementation,
            problem-solving, and long-term system sustainability, and I am open
            to collaboration on meaningful digital solutions.
          </p>
        </div>
        <div class="mt-3 flex flex-col gap-1">
          <div class="flex gap-1 items-center">
            <Icon
              icon="mdi:instagram"
              :height="16"
              class="text-bodyText dark:text-bodyDark"
            />
            <a
              href="https://www.instagram.com/rz.fahlevi10/"
              target="_blank"
              class="text-bodyText dark:hover:text-white text-xs"
              >@rz.fahlevi10</a
            >
          </div>
          <div class="flex gap-1 items-center">
            <Icon
              icon="mingcute:linkedin-line"
              :height="16"
              class="text-bodyText dark:text-bodyDark"
            />
            <a
              href="https://www.linkedin.com/in/reza-fahlevi-501b5b219/"
              target="_blank"
              class="text-bodyText dark:hover:text-white text-xs"
              >in/rzfahlevi</a
            >
          </div>
          <div class="flex gap-1 items-center">
            <Icon
              icon="icon-park-outline:github"
              :height="16"
              class="text-bodyText dark:text-bodyDark"
            />
            <a
              href="https://github.com/rezafahlevi08"
              target="_blank"
              class="text-bodyText dark:hover:text-white text-xs"
              >github.com/rezafahlevi08</a
            >
          </div>
        </div>
      </section>
    </main>
  </section>
</template>
