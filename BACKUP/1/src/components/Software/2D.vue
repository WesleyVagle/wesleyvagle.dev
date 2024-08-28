<template>
    <div class="w-full bg-[var(--n2)] p-10 flex flex-col gap-10 rounded-2xl">
        <div>
            <h1 class="font-medium text-xl">2D + Graphic design Software:</h1>
        </div>
        <div v-if="isSmallDevice || isExtraSmallDevice">
            <h1 class="font italic">XP = Experience Level</h1>
        </div>
        <div class="w-full flex flex-col flex-wrap gap-4" :class="[isSmallDevice || isExtraSmallDevice ? 'gap-[75px]' : '']">
            <SoftwareItem v-for="skill in skills" :key="skill.name" :icon="skill.icon" :name="skill.name" :tags="skill.tags" :level="skill.level" :isTitle="skill.isTitle" />
        </div>
    </div>
</template>

<script>
import SoftwareItem from './SoftwareItem.vue'

export default {
    name: 'Languages',
    components: {
        SoftwareItem
    },
    data() {
        return {
            skills: [
                { 
                    icon: "ai.png",
                    name: "Adobe Illustrator",
                    tags: ["2D", "Graphic design", "Logos", "Posters"],
                    level: "Good"
                },
                { 
                    icon: "fig.png",
                    name: "",
                    tags: ["2D", "Graphic design", "Logos", "Posters"],
                    level: "High"
                },
            ],
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
