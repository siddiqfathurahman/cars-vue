<template>
  <div class="relative w-full md:h-screen">
    <div class="sm:absolute bg-[#10b981] w-full sm:w-2/3 md:h-[92%] top-0 right-0">
        <div class="sm:absolute right-0 -inset-x-1/3 inset-y-20 mb-4 md:mb-0">
            <img src="../../assets/images/about.jpg" alt="acout" class="md:max-w-[32rem] h-auto object-cover" />
        </div>
        <div class="text-white px-4 sm:absolute right-1/5 sm:w-2/4 sm:transfrom sm:top-20 sm:-translite-y-2/3">
            <h2 class="text-2xl">About Us</h2>
            <h1 class="text-4xl font-bold mb-2">Welcome to CARBOOK</h1>
            <p class="mb-2">We are a leading car rental service provider, dedicated to offering you the best vehicles for your travel needs. Our mission is to provide you with a seamless and enjoyable experience, whether you're on a business trip or a leisurely vacation.</p>
            <p class="mb-2">At CARBOOK, we understand that every journey is unique. That's why we offer a diverse fleet of well-maintained vehicles, ranging from compact cars to luxury SUVs. Our team is committed to ensuring that you find the perfect car that suits your style and requirements.</p>
            <p class="mb-2">With our user-friendly online booking system, you can easily reserve your vehicle in just a few clicks.</p>
            <ButoonComponents text="Search Vechicle" class="mb-4 " />
        </div>
    </div>
  </div>
</template>

<script setup>
import ButoonComponents from '../composables/ButoonComponents.vue';

</script>

<style>

</style>