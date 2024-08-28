<template>
    <div class="w-full h-[800px] flex items-center justify-center gap-20" v-if="!isSmallDevice && !isExtraSmallDevice">
        <img src="@/assets/me2.png" alt="me" class="pic" />
        <div class="flex flex-col gap-10">
            <div class="flex flex-col gap-2">
                <h1 class="text-4xl font-bold">Wesley Vagle</h1>
                <p class="text-lg">Always ready to help</p>
            </div>
            <div class="flex gap-14">
                <div class="flex items-center gap-4">
                    <i class="pi pi-phone"></i>
                    <p class="text-lg">+27 066 290 0926</p>
                </div>
                <div class="flex items-center gap-4">
                    <i class="pi pi-envelope"></i>
                    <a href="mailto:vaglewesley@gmail.com" class="text-lg">vaglewesley@gmail.com</a>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full h-[800px] flex flex-col items-center justify-center gap-20" v-if="isSmallDevice || isExtraSmallDevice">
        <img src="@/assets/me2.png" alt="me" class="pic small">
        <div class="flex flex-col gap-10">
            <div class="flex flex-col gap-2">
                <h1 class="text-4xl font-bold">Wesley Vagle</h1>
                <p class="text-lg">Always ready to help</p>
            </div>
            <div class="flex flex-col gap-14">
                <div class="flex items-center gap-4">
                    <i class="pi pi-phone"></i>
                    <p class="text-lg">+27 066 290 0926</p>
                </div>
                <div class="flex items-center gap-4">
                    <i class="pi pi-envelope"></i>
                    <a href="mailto:vaglewesley@gmail.com" class="text-lg">vaglewesley@gmail.com</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Contact',
    components: {
    },
    data() {
        return {
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

<style scoped>
.pic {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    object-fit: cover;
}

.small {
    width: 80%;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
}
</style>