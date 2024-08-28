<template>
    <div class="w-full h-screen -z-10">
        <div class="intro flex flex-col items-end gap-6" :class="[isSmallDevice || isExtraSmallDevice? 'items-end small' : '']">
            <div class="font-black tracking-[10px] text-5xl" :class="[isSmallDevice ? 'text-[40px] tracking-[5px]' : '', isExtraSmallDevice ? 'text-[30px] tracking-[5px]' : '']">
                WESLEY VAGLE
            </div>
            <div class="font-medium tracking-[10px] text-2xl" :class="[isSmallDevice ? 'text-[20px] tracking-[5px]' : '', isExtraSmallDevice ? 'text-[15px] tracking-[2px]' : '']">
                DEVELOPMENT & DESIGN
            </div>
            <div class="w-[500px] text-[#A8A8A8] text-right mt-10 italic" :class="[isSmallDevice ? 'w-[80%] text-[18px]' : '', isExtraSmallDevice ? 'w-full text-[15px]' : '']">
                Ye shall reap what you sow. Quality results require quality input and wise choice.
            </div>
        </div>
    </div>
    <div class="main-bg -z-20">
        <video ref="backgroundVideo"autoplay muted loop class="vid w-full h-screen object-cover" :class="[isSmallDevice || isExtraSmallDevice ? 'small' : '']">
            <source src="@/assets/vid/vid.mov" type="video/mp4">
        </video>
    </div>
</template>

<script>

export default {
    name: 'GraphicDesign',
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
        this.$refs.backgroundVideo.playbackRate = 0.5;
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    }
}
</script>

<style scoped>

.intro {
    position: fixed;
    top: 50%;
    right: 7%;
    transform: translate(0, -50%);
}

.intro.small {
    top: 15%;
    transform: translate(0, 0);
}

.main-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -20;
}

.vid {
    object-fit: cover;
}

.vid.small {
    transform: translate(0, 15%);
}

</style>