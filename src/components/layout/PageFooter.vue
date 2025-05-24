<template>
  <div class="bg-black text-white p-4 md:p-20 py-10">
    <div>
      <div class="flex flex-col md:flex-row gap-10 justify-between">
        <div class="md:1/5 space-y-6">
          <h1 class="uppercase text-xl font-bold cursor-pointer">
            <span class="text-white">Car</span>
            <span class="text-green-500">BOOK</span>
          </h1>
          <p class="text-gray-100 text-base max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            delectus perferendis illo, obcaecati libero dicta consequatur?
          </p>
          <div class="flex items-center justify-between w-1/2 text-2xl">
            <FaBandsXTwitter />
            <CgFacebook />
            <BsInstagram />
          </div>
        </div>
        <FooterLinks :title="'informationLinks'" :links="informationLinks"/>
        <FooterLinks :title="'Customer Support'" :links="customerSupportLinks"/>
        <div class="md:w-1/5">
            <h2 class="text-xl font-semibold mb-2">You Have Question?</h2>
            <div v-for="(info, index) in contactInfo" :key="index" class="flex items-start space-x-4">
                <div>
                    <component :is='info.icon' class="text-md text-white"/>    
                </div>
                <p>{{ info.text }}</p>
            </div>
        </div>
      </div>
            <div>
        <p class="text-gray-200 text-md text-center mt-16">
          Copyright ©2025 CARBOOK
        </p>
      </div>
    </div>

  </div>
</template>

<script setup>
import {
  BsInstagram,
  CgFacebook,
  FaBandsXTwitter,
  AkLocation,
  AnOutlinedMail,
  BsTelephoneFill,
} from "@kalimahapps/vue-icons";
import FooterLinks from "../composables/FooterLinks.vue";
import { info } from "autoprefixer";

const informationLinks = [
  "About",
  "Services",
  "Terms and Conditions",
  "Best Price",
  "Guarantee",
  "Privacy & Cookies Policy",
];

const customerSupportLinks = [
  "FAQ",
  "Payment Option",
  "Booking Tips",
  "How it Works",
  "Contact Us",
];

const contactInfo = [
  {
    icon: AkLocation,
    text: "203 Fake St. Mountain View, San Francisco, California, USA",
  },
  { icon: AnOutlinedMail, text: "+2 392 3929 210" },
  { icon: BsTelephoneFill, text: "info@yourdomain.com" },
];
</script>

<style></style>
