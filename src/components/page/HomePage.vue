<template>
  <HeroSection />
  <featured-section />
  <AboutUs />
  <ServiceList />
  <CallToAction />
</template>

<script>
import AboutUs from '../homePage/AboutUs.vue';
import CallToAction from '../homePage/CallToAction.vue';
import FeaturedSection from '../homePage/FeaturedSection.vue';
import HeroSection from  "../homePage/HeroSection.vue";
import ServiceList from '../homePage/ServiceList.vue';
export default {
    components: {
        HeroSection,
        FeaturedSection,
        AboutUs,
        ServiceList,
        CallToAction,
    }
}
</script>

<style>

</style>