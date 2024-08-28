<template>
    <div data-aos="fade-up-small" v-if="!isSmallDevice && !isExtraSmallDevice">
        <div class="flex items-center gap-8">
            <div class="flex items-center gap-4 w-1/3">
                <img :src="getIcon" :alt="name" class="w-auto h-10" v-if="getIcon" />
                <p class="font-medium text-lg" v-if="name">{{ name }}</p>
            </div>
            <div class="flex items-center gap-2 w-1/3">
                <Chip v-for="tag in tags" :key="tag" :label="tag" class="bg-[#646464]" />
            </div>
            <div class="flex items-center gap-4 w-1/3">
                <div class="w-4 h-4 rounded-full" :class="levelColor" v-if="!isTitle"></div>
                <p class="font-medium text-lg">{{ level }}</p>
            </div>
        </div>
    </div>
    <div data-aos="fade-up-small" v-if="!isTitle && (isSmallDevice || isExtraSmallDevice)">
        <div class="flex flex-col items-start gap-4">
            <div class="flex items-center gap-4 w-full">
                <img :src="getIcon" :alt="name" class="w-auto h-10" v-if="getIcon" />
                <p class="font-medium text-lg" v-if="name">{{ name }}</p>
            </div>
            <div class="flex flex-wrap gap-2">
                <Chip v-for="tag in tags" :key="tag" :label="tag" class="bg-[#646464]" />
            </div>
            <div class="flex items-center gap-4">
                <p v-if="isSmallDevice || isExtraSmallDevice">XP</p>
                <div class="w-4 h-4 rounded-full" :class="levelColor" v-if="!isTitle"></div>
                <p class="font-medium text-lg">{{ level }}</p>
            </div>
        </div>
    </div>
</template>

<script>

import Chip from 'primevue/chip';

export default {
    name: 'Skill',
    props: {
        name: String,
        level: String,
        icon: String,
        tags: Array,
        isTitle: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Chip
    },
    data() {
        return {
            windowWidth: window.innerWidth
        }
    },
    computed: {
        getIcon() {
            if (!this.icon) return null;

            const icons = import.meta.glob('@/assets/icons/*.{svg,png,jpg,jpeg}');
            const iconPath = Object.keys(icons).find(path => path.includes(this.icon));

            if (iconPath) {
                return iconPath;
            } else {
                return null;
            }
        },
        levelColor() {
            switch (this.level) {
                case 'High':
                    return 'bg-[#00FFD1]';
                case 'Good':
                    return 'bg-[#82FF96]';
                case 'Moderate':
                    return 'bg-[#FFFFFF]';
                default:
                    return 'bg-[#646464]';
            }
        },
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