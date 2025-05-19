<template>
  <router-link to="/">
    <h1 class="upercase text-xl font-bold curdor-pointer">
        <span>CAR</span>
        <span class="text-green-500">BOOK</span>
    </h1>
  </router-link>
</template>

<script>
import { onBeforeMount, onMounted, ref } from 'vue'
import { computed } from 'vue'
export default {
    setup() {
        const isScrolled = ref(false)
        const isMobile = ref(window.interWidth < 760 )

        const handleScroll = () => {
            isScrolled.value = window.scrollY > 50 
        }

        onMounted (() => {
            window.addEventListener('scroll', handleScroll)
        })
        
        onBeforeMount(() => {
            window.removeEventListener('scroll', handleScroll)
        })

        const carClass = computed(() => {
            if(isMobile.value) return "text-black"
            return isScrolled.value ? "text-black" : "text-white"
        })

        return {
            isScrolled,
            isMobile,
            carClass
        }
    },
}
</script>

<style>

</style>