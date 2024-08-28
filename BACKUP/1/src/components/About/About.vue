<template>
    <div class="min-w-full bg-[var(--g1)] backdrop-blur-xl p-20 flex flex-col gap-20">

        <section class="min-w-full" data-aos="fade-up">
            <div class="w-full text-[var(--t2)] hover:text-[var(--t1)] transition-colors duration-300">
                <div class="flex flex-col gap-8 max-w-[50%]" :class="[isSmallDevice ? 'max-w-[100%]' : '', isExtraSmallDevice ? 'max-w-[100%]' : '']">
                    <h1 class="font-medium tracking-[2px] text-2xl text-[var(--t1)] whitespace-nowrap">ABOUT ME</h1>
                    <div class="flex flex-col gap-4">
                        <p>I am a Christian that wants to do the best I can in all things to fulfil my purpose and duty in life.</p>
                        <p>I am a very adventurous person who enjoys trying new things. My hobbies include hiking, cycling, sport, camping, reading, piano, guitar, art, animation, robotics, computers, graphic design, video editing, 3D modelling and my main hobby would be software and web development. I enjoy the work I do.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="w-full" data-aos="fade-up">
            <div class="w-full text-[var(--t2)] hover:text-[var(--t1)] transition-colors duration-300">
                <div class="flex flex-col gap-8 max-w-[50%]">
                    <h1 class="font-medium tracking-[2px] text-2xl text-[var(--t1)]">SKILLS</h1>
                    <div class="flex flex-col gap-1 whitespace-nowrap">
                        <p>Software & Website Development</p>
                        <p class="text-sm">Frontend + Backend</p>
                    </div>
                    <div>
                        <p>3D Modelling</p>
                    </div>
                    <div>
                        <p>Graphic Design</p>
                    </div>
                    <div>
                        <p>Photoshop</p>
                    </div>
                    <div class="whitespace-nowrap">
                        <p>Video Editing + Livestreams</p>
                    </div>
                    <div>
                        <p>Motion Graphics</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'About',
    data() {
        return {
            windowWidth: window.innerWidth
        };
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