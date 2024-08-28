<template>
  <div class="ascii-container" ref="asciiContainer">
    <pre>{{ asciiArt }}</pre>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, toRefs } from "vue";

export default {
  name: "AsciiArt",
  props: {
    width: {
      type: Number,
      default: 120,
    },
    height: {
      type: Number,
      default: 40,
    },
  },
  setup(props) {
    const { width, height } = toRefs(props);
    const asciiArt = ref("");
    const containerWidth = width.value;
    const containerHeight = height.value;
    const chars = ".,:;#@.a/c?asl12345#! ";
    let animationFrame;

    const generateAsciiArt = () => {
      let art = "";
      for (let y = 0; y < containerHeight; y++) {
        for (let x = 0; x < containerWidth; x++) {
          art += chars[Math.floor(Math.random() * chars.length)];
        }
        art += "\n";
      }
      return art;
    };

    const updateAsciiArt = (event) => {
      const container = event.target;
      const rect = container.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      let newArt = "";
      for (let y = 0; y < containerHeight; y++) {
        for (let x = 0; x < containerWidth; x++) {
          const distance = Math.sqrt(
            Math.pow(mouseX - (x * rect.width) / containerWidth, 2) +
            Math.pow(mouseY - (y * rect.height) / containerHeight, 2)
          );
          const maxDistance = Math.sqrt(Math.pow(rect.width, 1.5) + Math.pow(rect.height, 2));
          const blankProbability = distance / maxDistance; // Probability increases with distance
          if (Math.random() < blankProbability) {
            newArt += " "; // Higher chance of being a blank space further away from the mouse
          } else {
            newArt += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        newArt += "\n";
      }
      asciiArt.value = newArt;
    };

    const loop = () => {
      animationFrame = requestAnimationFrame(loop);
    };

    onMounted(() => {
      asciiArt.value = generateAsciiArt();
      const container = document.querySelector(".ascii-container");
      container.addEventListener("mousemove", updateAsciiArt);
      loop();
    });

    onBeforeUnmount(() => {
      const container = document.querySelector(".ascii-container");
      container.removeEventListener("mousemove", updateAsciiArt);
      cancelAnimationFrame(animationFrame);
    });

    return {
      asciiArt,
    };
  },
};
</script>

<style scoped>
.ascii-container {
  font-family: monospace;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

pre {
  font-size: 14px;
  line-height: 1;
  margin: 0;
}
</style>