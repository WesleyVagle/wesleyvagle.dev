<template>
    <div class="w-full bg-[var(--n2)] p-10 flex flex-col gap-10 rounded-2xl">
        <div>
            <h1 class="font-medium text-xl">Database connectors I've worked with:</h1>
        </div>
        <div v-if="isSmallDevice || isExtraSmallDevice">
            <h1 class="font italic">XP = Experience Level</h1>
        </div>
        <div class="w-full flex flex-col flex-wrap gap-4 text-[var(--t2)] hover:text-[var(--t1)] transition-all duration-300">
            <Skill v-for="skill in skills" :key="skill.name" :name="skill.name" :level="skill.level" :isTitle="skill.isTitle" />
        </div>
    </div>
</template>

<script>
import Skill from './Skill.vue'

export default {
    name: 'Languages',
    components: {
        Skill
    },
    data() {
        return {
            skills: [
                { name: "Connector:", level: "Experience level:", isTitle: true },
                { name: "GraphQL", level: "Experimental" },
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
