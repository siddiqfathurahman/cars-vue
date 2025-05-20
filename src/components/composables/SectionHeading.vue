<template>
  <div ref="content" class="text-center pt-10 md:pt-20 content-wrapper" :class="{'animate-in': isVisible}" >
    <p v-if="description" class="text-lg text-blue-500 uppercase tracking-wider font-medium">{{ description }}</p>
    <h1 class="text-2xl md:text-4xl font-semibold text-gray-950">{{ title }}</h1>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    title: String,
    description: String,
});

const isVisible = ref(false);
const content = ref(null);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                isVisible.value = true;
                observer.unobserve(entry.target);
            }
        })
    }, {
        threshold: 0.3,
    });

    if (content.value) {
        observer.observe(content.value);
    }
});
</script>

<style>
.content-wrapper {
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.5s ease-in-out;
}

.content-wrapper.animate-in {
    opacity: 1;
    transform: translateY(0);
}
</style>