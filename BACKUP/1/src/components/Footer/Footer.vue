<template>
    <div class="w-full h-[400px] bg-[var(--n1)] p-20 flex flex-col gap-8 items-center" :class="[isSmallDevice ? 'p-10 items-start' : '', isExtraSmallDevice ? 'p-5 items-start' : '']">
        <div class="border-t-[1px] border-[var(--n4)] w-[70%] mb-10" :class="[isSmallDevice ? 'w-[90%]' : '', isExtraSmallDevice ? 'w-[100%]' : '']"
        ></div>
        <div class="font-black tracking-[10px] text-2xl whitespace-nowrap" :class="[isSmallDevice ? 'text-2xl tracking-[5px]' : '', isExtraSmallDevice ? 'text-xl tracking-[5px]' : '']">
            WESLEY VAGLE
        </div>
        <div class="tracking-[10px] text whitespace-nowrap" :class="[isSmallDevice ? 'text-lg tracking-[5px]' : '', isExtraSmallDevice ? 'text-[15px] tracking-[5px]' : '']">
            DEVELOPMENT & DESIGN
        </div>
    </div>

</template>

<script>
export default {
    name: 'Footer',
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


</style>