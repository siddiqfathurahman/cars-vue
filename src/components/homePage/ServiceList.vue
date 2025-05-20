<template>
  <div>
    <SectionHeading description="Services" title="Our Latest Services" />
  </div>
  <div class="flex flex-col items-center md:flex-row justify-center gap-10 py-10 md:py-20 px-3 ">
    <div v-for="(events, index) in events" :key="index" class="w-full md:w-60 bg-white rounded-lg transition">
      <div
        class="bg-blue-500 w-20 h-20 md:w-24 md:h-24 rounded-full flex justify-center items-center mx-auto mt-4"
      >
        <component :is="events.icon" class="text-white text-2xl md:text-4xl" />
      </div>
      <div class="p-4 text-center">
        <h2 class="text-lg font-semibold text-gray-800 mt-2">{{ events.title }}</h2>
        <p class="text-md text-gray-400 mt-2">{{ events.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SectionHeading from "../composables/SectionHeading.vue";
import { AkHeart, IcCity, MaAirport } from "@kalimahapps/vue-icons";

const events = ref([
  {
    title: "Wedding Ceremony",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    icon: AkHeart,
  },
  {
    title: "City Transfer",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    icon: IcCity,
  },
  {
    title: "Airport Transfer",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    icon: MaAirport,
  },
  {
    title: "Whole City Tour",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    icon: IcCity,
  },
]);
</script>

<style></style>
