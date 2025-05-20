<template>
  <HeroSection />
  <featured-section />
</template>

<script>
import FeaturedSection from '../homePage/FeaturedSection.vue';
import HeroSection from  "../homePage/HeroSection.vue";
export default {
    components: {
        HeroSection,
        FeaturedSection,
    }
}
</script>

<style>

</style>