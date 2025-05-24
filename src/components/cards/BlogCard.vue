<template>
  <div>
    <img :src="getImage(image)" alt="" class="object-cover h-56 w-full">
    <div class="space-y-2 pt-5">
        <p class="text-sm text-blue-500">
            {{ date }} {{ author }} {{ comments?.length }} 
        </p>
        <h2 class="text-xl font-semibold text-gray-800 mt-2">
            {{ title }}
        </h2>
        <ButoonComponents text="Read More"/>
    </div>
  </div>
</template>

<script setup>
import ButoonComponents from '../composables/ButoonComponents.vue';

defineProps ({
    id:Number,
    title:String,
    author:String,
    comments: Array,
    date: String,
    image:String,
})

const getImage = (imageName) => {
    return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
};  
</script>

<style>

</style>