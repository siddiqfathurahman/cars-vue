<template>
  <header class="flex justify-center px-6 p-2">
    <div class="flex justify-between items-center w-full md:w-5/6 md:relative z-50">
      <PageLogo />
      <nav class="space-x-6">
        <router-link
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          class="{'active-link': route.path === link.path}"
          >{{ link.name }}
        </router-link>
      </nav>
    </div>
  </header>

</template>

<script setup>
import PageLogo from "./composables/PageLogo.vue"
import { useRoute } from "vue-router";

const route = useRoute()

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "FAQ", path: "/faq" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
]
</script>

<style>

</style>