<template>
    <div class="w-full bg-[var(--n2)] p-10 flex flex-col gap-10 rounded-2xl">
        <div>
            <h1 class="font-medium text-xl">Services I've worked with:</h1>
        </div>
        <div v-if="isSmallDevice || isExtraSmallDevice">
            <h1 class="font italic">XP = Experience Level</h1>
        </div>
        <div class="w-full flex flex-col flex-wrap gap-12">
            <div v-for="service in services" :key="service.icon" data-aos="fade-up">
                <div class="flex flex-col gap-8 text-[var(--t2)] hover:text-[var(--t1)] transition-all duration-300">
                    <div class="w-full bg-[var(--n3)] rounded-lg p-4">
                        <img :src="getIcon(service.icon)" :alt="service.icon" class="w-auto h-8" />
                    </div>
                    <div class="flex flex-col gap-4">
                        <Skill v-for="skill in service.skills" :key="skill.name" :icon="skill.icon" :name="skill.name" :level="skill.level" :isTitle="skill.isTitle" />
                    </div>
                </div>
            </div>
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
            services: [
                {
                    "icon": "aws.png",
                    "skills": [
                        { name: "Activity:", level: "Experience level:", isTitle: true },
                        { name: "EC2", level: "Good" },
                        { name: "Lambda", level: "Good" },
                        { name: "DynamoDB", level: "Good" },
                        { name: "S3", level: "Good" },
                        { name: "RDS", level: "Good" },
                        { name: "API Gateway", level: "Good" },
                        { name: "EventBridge", level: "Good" },
                        { name: "Amplify", level: "Good" },
                        { name: "AppSync", level: "Good" },
                    ]
                },
                {
                    "icon": "auth.png",
                    "skills": [
                        { name: "Activity:", level: "Experience level:", isTitle: true },
                        { name: "General", level: "Good" },
                    ]
                },
                {
                    "icon": "cloudflare.png",
                    "skills": [
                        { name: "Activity:", level: "Experience level:", isTitle: true },
                        { name: "General", level: "Moderate" },
                    ]
                },
                {
                    "icon": "host.png",
                    "skills": [
                        { name: "Activity:", level: "Experience level:", isTitle: true },
                        { name: "General", level: "Moderate" },
                    ]
                },
                {
                    "icon": "amp.png",
                    "skills": [
                        { name: "Activity:", level: "Experience level:", isTitle: true },
                        { name: "General", level: "Moderate" },
                    ]
                },
                {
                    "icon": "fb.png",
                    "skills": [
                        { name: "Activity:", level: "Experience level:", isTitle: true },
                        { name: "General", level: "Moderate" },
                    ]
                },
                {
                    "icon": "az.png",
                    "skills": [
                        { name: "Activity:", level: "Experience level:", isTitle: true },
                        { name: "General", level: "Moderate" },
                    ]
                },
                {
                    "icon": "gd.png",
                    "skills": [
                        { name: "Activity:", level: "Experience level:", isTitle: true },
                        { name: "General", level: "Moderate" },
                    ]
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
        },
        getIcon(icon) {
            if (!icon) return null;
            return './images/' + icon;

            const icons = import.meta.glob('@/assets/icons/*.{svg,png,jpg,jpeg}');
            const iconPath = Object.keys(icons).find(path => path.includes(icon));

            if (iconPath) {
                return iconPath;
            } else {
                return null;
            }
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