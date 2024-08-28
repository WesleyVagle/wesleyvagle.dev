<template>
    <div class="w-full bg-[var(--n2)] p-10 flex flex-col gap-10 rounded-2xl text-[var(--t2)] hover:text-[var(--t1)] transition-colors duration-300">
        <div>
            <h1 class="font-medium text-xl text-[var(--t1)]">General coding ability:</h1>
        </div>
        <div class="w-full flex flex-col flex-wrap gap-4">
            <p>I am a fullstack developer, able to work on both frontend and backend code. I have worked as a 
solo developer thus far due to fact that fellow software developers were not employed or available 
on the projects I've worked on. This fact has driven me to learn and develop in all aspects and 
fields required to build and develop software and websites, giving me the ability to easily adapt 
and specialise in all areas of coding.</p>
            <p>I am a fast learner and adapt to new code easily. I am continuously learning and developing my 
                skills in all aspects of coding.</p>
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
            ]
        }
    }
}
</script>
