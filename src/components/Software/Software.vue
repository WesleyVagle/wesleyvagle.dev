<template>
    <div class="min-w-full bg-[var(--n1)] p-20 flex flex-col gap-4" :class="[isSmallDevice ? 'p-5' : '', isExtraSmallDevice ? 'p-5' : '']">
        <div class="w-full bg-[var(--n2)] p-10 rounded-2xl" data-aos="fade-up">
            <h1 class="font-medium tracking-[2px] text-2xl text-[var(--t1)]">SOFTWARE I'VE WORKED WITH</h1>
        </div>

        <D data-aos="fade-up"/>
        <GD data-aos="fade-up"/>
        <VD data-aos="fade-up"/>
        <IE data-aos="fade-up"/>
        <AE data-aos="fade-up"/>
        <Projects data-aos="fade-up"/>
    </div>
</template>

<script>

import D from './3D.vue';
import GD from './2D.vue';
import VD from './VD.vue';
import IE from './IE.vue';
import AE from './AE.vue';
import Projects from './Projects.vue';

export default {
    name: 'Software',
    components: {
        D,
        GD,
        VD,
        IE,
        AE,
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