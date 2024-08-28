<template>
    <div class="w-full bg-[var(--n2)] p-10 flex flex-col gap-10 rounded-2xl">
        <!-- <div>
            <h1 class="font-medium text-2xl">Design projects I've worked on:</h1>
        </div> -->
        <div class="flex flex-col gap-4 text-[var(--t2)] hover:text-[var(--t1)] transition-colors duration-300">
            <div>
                <h1 class="font-medium text-xl">Computer Literacy</h1>
            </div>
            <div class="w-full flex flex-col flex-wrap gap-2">
                <p>I have good computer literacy and am able to work well with Microsoft software such as Excel, Word, PowerPoint etc.</p>
            </div>
        </div>
        <div class="flex flex-col gap-4 text-[var(--t2)] hover:text-[var(--t1)] transition-colors duration-300">
            <div>
                <h1 class="font-medium text-xl">Computer Hardware</h1>
            </div>
            <div class="w-full flex flex-col flex-wrap gap-2">
                <p>I have generally good knowledge in computer hardware as I have built my own computer.</p>
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