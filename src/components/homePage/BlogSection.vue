<template>
  <SectionHeading title="Recent Blog" description="Blog"/>
  <Section class="flex flex-col md:flex-row justify-center gap-6 py-10 md:py-20 p-4">
    <BlogCard v-for="(blog, index) in blogs" :key="index"
    :id="blog.id"
    :date="blog.date"
    :title="blog.title"
    :image="blog.image"
    :author="blog.author"
    :deskription="blog.description"
    :comment="blog.comments"
    :class="'md:w-80'"
    />
  </Section>
</template>

<script setup>
import { comment } from 'postcss';
import BlogCard from '../cards/BlogCard.vue';
import SectionHeading from '../composables/SectionHeading.vue';
import { blogs } from '../data/blogData';

</script>

<style>

</style>