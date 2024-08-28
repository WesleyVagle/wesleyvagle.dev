<template>
    <div class="w-full bg-[var(--n2)] p-10 flex flex-col gap-10 rounded-2xl">
        <div>
            <h1 class="font-medium text-xl">Coding languages I've worked with:</h1>
        </div>
        <div v-if="isSmallDevice || isExtraSmallDevice">
            <h1 class="font italic">XP = Experience Level</h1>
        </div>
        <div class="w-full flex flex-col gap-4 text-[var(--t2)] hover:text-[var(--t1)] transition-all duration-300">
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
                { name: "Language:", level: "Experience level:", isTitle: true },
                { name: "JavaScript", level: "High" },
                { name: "HTML", level: "High" },
                { name: "CSS", level: "High" },
                { name: "Python", level: "Good" },
                { name: "C++", level: "Good" },
                { name: "Java", level: "Moderate" },
                { name: "Visual Basic (VBA)", level: "Moderate" },
                { name: "C#", level: "Experimental" },
                { name: "Rust", level: "Experimental" },
                { name: "Dart", level: "Experimental" }
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
