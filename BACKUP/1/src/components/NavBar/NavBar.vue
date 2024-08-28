<template>
    <div class="w-full fixed top-0 flex items-start justify-center p-10 backdrop-blur-xl z-50">
        <div :class="['flex items-center', isSmallDevice ? 'w-fit' : 'w-full']">
            <button @click="toggleMenu" class="sm:hidden absolute right-4 top-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                    </path>
                </svg>
            </button>
            <div class="hidden sm:flex items-center justify-center gap-20 w-full py-2">
                <Link to="/Development">
                <template v-slot:default>Software & Website Development</template>
                <template v-slot:extra>Frontend + Backend</template>
                </Link>
                <Link to="/GraphicDesign">
                <template v-slot:default>Graphic Design</template>
                </Link>
                <Link to="/">
                <template v-slot:default>CV</template>
                </Link>
                <!-- <Link to="/About">
            <template v-slot:default>About</template>
          </Link> -->
                <Link to="/Contact">
                <template v-slot:default>Contact</template>
                </Link>
            </div>
        </div>
        <div v-if="isMenuOpen" class="sm:hidden flex flex-col items-center gap-10 mt-4">
            <Link to="/Development">
            <template v-slot:default>Software & Website Development</template>
            <template v-slot:extra>Frontend + Backend</template>
            </Link>
            <Link to="/GraphicDesign">
            <template v-slot:default>Graphic Design</template>
            </Link>
            <Link to="/">
            <template v-slot:default>CV</template>
            </Link>
            <!-- <Link to="/About">
          <template v-slot:default>About</template>
        </Link> -->
            <Link to="/Contact">
            <template v-slot:default>Contact</template>
            </Link>
        </div>
    </div>
</template>

<script>
import Link from './Link.vue';

export default {
    name: 'NavBar',
    components: {
        Link
    },
    data() {
        return {
            isMenuOpen: false,
            windowWidth: window.innerWidth
        };
    },
    computed: {
        isSmallDevice() {
            return this.windowWidth < 640; // Tailwind's sm breakpoint is 640px
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
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
};
</script>

<style scoped>
/* Add any additional styling here */
</style>