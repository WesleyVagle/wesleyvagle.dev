<template>
    <div class="w-full bg-[var(--n1)] p-20 flex flex-col gap-4" :class="[isSmallDevice ? 'p-5' : '', isExtraSmallDevice ? 'p-5' : '']">
        <div class="w-full bg-[var(--n2)] p-10 rounded-2xl" data-aos="fade-up">
            <h1 class="font-medium tracking-[2px] text-2xl text-[var(--t1)]">SOFTWARE & WEBSITE DEVELOPMENT</h1>
        </div>

        <Languages data-aos="fade-up" />
        <Frameworks data-aos="fade-up"/>
        <VersionControl data-aos="fade-up"/>
        <Databases data-aos="fade-up"/>
        <DatabaseConnectors data-aos="fade-up"/>
        <Services data-aos="fade-up"/>
        <GeneralAbility data-aos="fade-up"/>
        <Projects data-aos="fade-up"/>
    </div>
</template>

<script>

import Languages from './Languages.vue';
import Frameworks from './Frameworks.vue';
import VersionControl from './VersionControl.vue';
import Databases from './Databases.vue';
import DatabaseConnectors from './DatabaseConnectors.vue';
import Services from './Services.vue';
import GeneralAbility from './GeneralAbility.vue';
import Projects from './Projects.vue';

export default {
    name: 'SWD',
    components: {
        Languages,
        Frameworks,
        VersionControl,
        Databases,
        DatabaseConnectors,
        Services,
        GeneralAbility,
        Projects
    },
    data() {
        return {
            windowWidth: window.innerWidth
        }
    },
    computed: {
        isSmallDevice() {
            return (this.windowWidth < 640 && this.windowWidth >= 400); // Tailwind's sm breakpoint is 640px
        },
        isExtraSmallDevice() {
            return this.windowWidth < 400; // Tailwind's xs breakpoint is 320px
        }
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    }
}

</script>