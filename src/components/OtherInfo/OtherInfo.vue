<template>
    <div class="w-full bg-[var(--n1)] p-20 flex flex-col gap-4" :class="[isSmallDevice ? 'p-5' : '', isExtraSmallDevice ? 'p-5' : '']">
        <div class="w-full bg-[var(--n2)] p-10 rounded-2xl" data-aos="fade-up">
            <h1 class="font-medium tracking-[2px] text-2xl text-[var(--t1)]">GENERAL COMPUTER KNOWLEDGE</h1>
        </div>

        <Projects data-aos="fade-up"/>
    </div>
</template>

<script>

import Projects from './Projects.vue';

export default {
    name: 'OtherInfo',
    components: {
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