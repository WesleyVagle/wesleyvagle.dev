<template>
    <div id="app flex flex-col items-center">
        <NavBar />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>

import NavBar from './components/NavBar/NavBar.vue'
import Footer from './components/Footer/Footer.vue'

export default {
    name: 'App',
    components: {
        NavBar,
        Footer
    }
}
</script>

<style scoped>
/* Add any additional styles here */
</style>