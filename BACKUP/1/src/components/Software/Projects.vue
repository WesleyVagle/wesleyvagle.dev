<template>
    <div class="w-full bg-[var(--n2)] p-10 flex flex-col gap-10 rounded-2xl">
        <div>
            <h1 class="font-medium text-2xl">Design projects I've worked on:</h1>
        </div>
        <div class="flex flex-col gap-4 text-[var(--t2)] hover:text-[var(--t1)] transition-colors duration-300">
            <div>
                <h1 class="font-medium text-xl">3D work</h1>
            </div>
            <div class="w-full flex flex-col flex-wrap gap-2">
                <p>I have created and sold multiple 3D assets for a group of people developing a game as a hobby / side job as well as assets used in my own personal projects.</p>
            </div>
        </div>
        <div class="flex flex-col gap-4 text-[var(--t2)] hover:text-[var(--t1)] transition-colors duration-300">
            <div>
                <h1 class="font-medium text-xl">2D work and Graphic design</h1>
            </div>
            <div class="w-full flex flex-col flex-wrap gap-2">
                <p>I have designed logos, posters and general designs for various individuals as well as for my own personal projects.</p>
            </div>
        </div>
        <div class="flex flex-col gap-4 text-[var(--t2)] hover:text-[var(--t1)] transition-colors duration-300">
            <div>
                <h1 class="font-medium text-xl">Video editing and Motion graphics</h1>
            </div>
            <div class="w-full flex flex-col flex-wrap gap-2">
                <p>I have edited YouTube videos for an artist as well as videos for various other individuals and for presentations.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Languages',
    components: {
    },
    data() {
        return {

        }
    }
}
</script>