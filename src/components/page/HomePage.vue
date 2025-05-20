<template>
  <HeroSection />
  <featured-section />
  <AboutUs />
  <ServiceList />
</template>

<script>
import AboutUs from '../homePage/AboutUs.vue';
import FeaturedSection from '../homePage/FeaturedSection.vue';
import HeroSection from  "../homePage/HeroSection.vue";
import ServiceList from '../homePage/ServiceList.vue';
export default {
    components: {
        HeroSection,
        FeaturedSection,
        AboutUs,
        ServiceList
    }
}
</script>

<style>

</style>