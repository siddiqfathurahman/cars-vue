import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '../components/layout/DefaultLayout.vue'
import HomePage from '../components/page/HomePage.vue';
import ServicesPage from '../components/page/ServicesPage.vue';
import PricingPage from '../components/page/PricingPage.vue';
import BlogPage from '../components/page/BlogPage.vue';
import ContactPage from '../components/page/ContactPage.vue';
import AboutPage from '../components/page/AboutPage.vue';
import CarsPage from '../components/page/CarsPage.vue';


const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '',
                name: 'home',
                component: HomePage,
            },
            {
                path: '/about',
                name: 'about',
                component: AboutPage,
            },
            {
                path: '/services',
                name: 'services',
                component: ServicesPage,
            },
            {
                path: ' /pricing',
                name: 'pricing',
                component: PricingPage,
            },
            {
                path: ' /cars',
                name: 'cars',
                component: CarsPage,
            },
            {
                path: ' /blog',
                name: 'blog',
                component: BlogPage,
            },
            {
                path: '/contact',
                name: 'contact',
                component: ContactPage,
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior () {
        return { top: 0 }
    }
});

export default router;