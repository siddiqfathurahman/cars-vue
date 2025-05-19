<template>
  <div class="min-h-screen flex flex-col">
    <PageHeader />

    <main class="flex-grow">
      <router-view />
    </main>

    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "./PageHeader.vue";
import  PageFooter from "./PageFooter.vue"
export default {
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>

<style></style>
