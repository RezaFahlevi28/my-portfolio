<script setup>
import { defineAsyncComponent } from "vue";
const HeroSection = defineAsyncComponent(() =>
  import("@/components/layouts/Hero.vue")
);
const ProjectsSection = defineAsyncComponent(() =>
  import("@/components/layouts/Project.vue")
);
const SkillSection = defineAsyncComponent(() =>
  import("@/components/layouts/Skill.vue")
);
const WorkSection = defineAsyncComponent(() =>
  import("@/components/layouts/Work.vue")
);
const EducationSection = defineAsyncComponent(() =>
  import("@/components/layouts/Education.vue")
);
const CertificationSection = defineAsyncComponent(() =>
  import("@/components/layouts/Certification.vue")
);
const CTASection = defineAsyncComponent(() =>
  import("@/components/layouts/CTA.vue")
);
</script>
<template>
  <HeroSection />
  <ProjectsSection />
  <SkillSection />
  <WorkSection />
  <EducationSection />
  <CertificationSection />
  <CTASection />
</template>
