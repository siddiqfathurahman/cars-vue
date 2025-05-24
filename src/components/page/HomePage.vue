<template>
  <HeroSection />
  <featured-section />
  <AboutUs />
  <ServiceList />
  <CallToAction />
  <TestimonySection />
</template>

<script>
import AboutUs from '../homePage/AboutUs.vue';
import BlogSection from '../homePage/BlogSection.vue';
import CallToAction from '../homePage/CallToAction.vue';
import FeaturedSection from '../homePage/FeaturedSection.vue';
import HeroSection from  "../homePage/HeroSection.vue";
import ServiceList from '../homePage/ServiceList.vue';
import TestimonySection from '../homePage/TestimonySection.vue';
export default {
    components: {
        HeroSection,
        FeaturedSection,
        AboutUs,
        ServiceList,
        CallToAction,
        TestimonySection,
        BlogSection
    }
}
</script>

<style>

</style>