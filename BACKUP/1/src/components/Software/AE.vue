<template>
    <div class="w-full bg-[var(--n2)] p-10 flex flex-col gap-10 rounded-2xl">
        <div class="">
            <h1 class="font-medium text-xl">Audo editing:</h1>
        </div>
        <div class="w-full flex flex-col flex-wrap gap-4">
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
                    icon: "au.png",
                    name: "Adobe Audition",
                    tags: ["Audio editing"],
                    level: "Experimental"
                },
            ]
        }
    }
}
</script>
