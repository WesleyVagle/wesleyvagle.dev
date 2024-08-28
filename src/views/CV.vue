<template>
    <div class="w-full h-full flex flex-col items-center">
        <LandingPage />
        <About />
        <SWD />
        <Software />
        <OtherInfo />
        <Education />
    </div>
</template>

<script>

import LandingPage from '../components/LandingPage/LandingPage.vue'
import About from '../components/About/About.vue'
import SWD from '../components/SWD/SWD.vue'
import Software from '../components/Software/Software.vue'
import OtherInfo from '../components/OtherInfo/OtherInfo.vue'
import Education from '../components/Education/Education.vue'

export default {
    name: 'CV',
    components: {
        LandingPage,
        About,
        SWD,
        Software,
        OtherInfo,
        Education,
    }
}

</script>