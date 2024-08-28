<template>
    <div class="main-bg -z-20" v-if="!isSmallDevice && !isExtraSmallDevice">
        <div class="w-full h-screen -z-10">
            <div class="intro flex flex-col items-end gap-6">
                <div class="font-black tracking-[10px] text-5xl" :class="[isSmallDevice ? 'text-[40px] tracking-[5px]' : '', isExtraSmallDevice ? 'text-[30px] tracking-[5px]' : '']">
                    WESLEY VAGLE
                </div>
                <div class="font-medium tracking-[10px] text-2xl" :class="[isSmallDevice ? 'text-lg' : '', isExtraSmallDevice ? 'text-[15px] tracking-[2px]' : '']">
                    DEVELOPMENT & DESIGN
                </div>
                <div class="w-[500px] text-[#A8A8A8] text-right mt-10 italic" :class="[isSmallDevice ? 'w-[300px]' : '', isExtraSmallDevice ? 'w-[300px] text-[15px]' : '']">
                    Ye shall reap what you sow. Quality results require quality input and wise choice.
                </div>
            </div>
        </div>
    </div>
    <video ref="backgroundVideo" autoplay muted loop class="vid-bg w-full h-screen object-contain mt-4" :class="[isSmallDevice || isExtraSmallDevice ? 'mt-40' : '']">
        <source src="@/assets/vid/video1.mov" type="video/mp4">
    </video>
    <div class="notify italic">
        * Page under construction. Feel free to explore the rest of the website :)
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
.main-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
}
.notify {
    position: relative;
    /* bottom: 50px; */
    /* left: 50%; */
    /* margin-left: 50%; */
    /* transform: translate(-50%, 0); */
    text-align: center;
    z-index: 20;
}
.vid-bg {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -20;
}
</style>