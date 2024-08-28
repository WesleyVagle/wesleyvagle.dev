<template>
    <div class="relative">
        <Donut :width="dWidth" :height="dHeight" />
        <div class="notify italic">
            * Page under construction. Feel free to explore the rest of the website :)
        </div>
    </div>
</template>

<script>
import Donut from "../components/Donut/Donut.vue";

export default {
    name: "Development",
    components: {
        Donut,
    },
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
        },
        dWidth() {
            if (this.isSmallDevice) {
                return 30;
            } else if (this.isExtraSmallDevice) {
                return 20;
            } else {
                return 120;
            }
        },
        dHeight() {
            // if (this.isSmallDevice) {
            //     return 40;
            // } else if (this.isExtraSmallDevice) {
            //     return 40;
            // } else {
            // }
            return 40;
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
};


</script>

<style>

/* .notify {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 20;
} */

.notify {
    position: relative;
    /* bottom: 50px; */
    /* left: 50%; */
    /* margin-left: 50%; */
    /* transform: translate(-50%, 0); */
    text-align: center;
    z-index: 20;
}

</style>