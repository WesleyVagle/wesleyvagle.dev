<template>
  <div data-aos="fade-up-small" v-if="!isSmallDevice && !isExtraSmallDevice">
    <div class="flex items-center gap-8">
      <div class="flex items-center gap-4 w-52">
        <img :src="getIcon" :alt="name" class="w-10 h-10" v-if="getIcon" />
        <!-- <img :src="this.icon" :alt="name" class="w-auto h-10" /> -->
        <p class="font-medium text-lg">{{ name }}</p>
      </div>
      <div class="flex items-center gap-4 w-52">
        <div class="w-4 h-4 rounded-full" :class="levelColor" v-if="!isTitle"></div>
        <p class="font-medium text-lg">{{ level }}</p>
      </div>
    </div>
  </div>
  <div data-aos="fade-up-small" v-if="!isTitle && (isSmallDevice || isExtraSmallDevice)">
    <div class="flex flex-col items-start gap-2">
      <div class="flex items-center gap-4 w-52">
        <img :src="getIcon" :alt="name" class="w-10 h-10" v-if="getIcon" />
        <!-- <img :src="this.icon" :alt="name" class="w-auto h-10" /> -->
        <p class="font-medium text-lg">{{ name }}</p>
      </div>
      <div class="flex items-center gap-4 w-52">
        <p v-if="isSmallDevice || isExtraSmallDevice">XP</p>
        <div class="w-4 h-4 rounded-full" :class="levelColor" v-if="!isTitle"></div>
        <p class="font-medium text-lg">{{ level }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    name: String,
    level: String,
    icon: String,
    isTitle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  computed: {
    getIcon() {
      if (!this.icon) return null;
      
      return './images/' + this.icon;

      try {
        return require(`@/assets/icons/${this.icon}.svg`);
      } catch (e1) {
        try {
          return require(`@/assets/icons/${this.icon}.png`);
        } catch (e2) {
          try {
            return require(`@/assets/icons/${this.icon}.jpg`);
          } catch (e3) {
            try {
              return require(`@/assets/icons/${this.icon}.jpeg`);
            } catch (e4) {
              return null;
            }
          }
        }
      }
    },
    levelColor() {
      switch (this.level) {
        case 'High':
          return 'bg-[#00FFD1]';
        case 'Good':
          return 'bg-[#82FF96]';
        case 'Moderate':
          return 'bg-[#FFFFFF]';
        default:
          return 'bg-[#646464]';
      }
    },
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