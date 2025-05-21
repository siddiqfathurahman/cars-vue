<template>
    <div class="relative w-full h-96 flex items-center">
        <div class="absolute inset-0">
            <img src="../../assets/images/bg_3.jpg" alt="call" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/50"></div>
        </div>
        <div class="absolute right-0 md:right-40 px-4 z-10">
            <h1 class="text-3xl font-bold mb-4 text-white">
                Do you want To Earn With Us?<br />
                So Don't Be Late.
            </h1>
            <ButoonComponents text="Become To Driver" />
        </div>
        <div class="md:absolute inset-0 bg-[#01d28d] clip-slant w-1/2"></div>
    </div>
</template>

<script setup>
import ButoonComponents from '../composables/ButoonComponents.vue';
</script>

<style>
.clip-slant {
    clip-path: polygon(0 0, 90% 0, 70% 100%, 0 100%);
}
</style>
