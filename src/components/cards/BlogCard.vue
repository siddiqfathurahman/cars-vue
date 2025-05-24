<template>
  <div>
    <img src="getImage(image)" alt="">
    <div>
        <p>
            {{ date }} {{ author }} {{ comments?.length }} 
        </p>
        <h2>
            {{ title }}
        </h2>
        <ButoonComponents text="Read More"/>
    </div>
  </div>
</template>

<script setup>
import ButoonComponents from '../composables/ButoonComponents.vue';

const getImage = (imageName) => {
    return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
};  
</script>

<style>

</style>