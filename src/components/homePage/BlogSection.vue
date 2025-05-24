<template>
  <SectionHeading title="Recent Blog" description="Blog"/>
  <Section>
    <BlogCard />
  </Section>
</template>

<script setup>
import BlogCard from '../cards/BlogCard.vue';
import SectionHeading from '../composables/SectionHeading.vue';
import { blogs } from '../data/blogData';

</script>

<style>

</style>