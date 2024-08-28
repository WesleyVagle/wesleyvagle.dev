<template>
    <div class="w-full bg-[var(--n2)] p-10 flex flex-col gap-10 rounded-2xl">
        <div>
            <h1 class="font-medium text-2xl">Coding projects I've worked on:</h1>
        </div>
        <div class="flex flex-col gap-4 text-[var(--t2)] hover:text-[var(--t1)] transition-colors duration-300">
            <div>
                <h1 class="font-medium text-xl">Data analytics and company automation</h1>
            </div>
            <div class="w-full flex flex-col flex-wrap gap-2">
                <p class="italic">Scenario</p>
                <p>The company tracks vehicles carrying commodities from mines to ports.</p>
                <p>Large amounts of data are uploaded to various tracking websites regarding the vehicles in transit. 
Employees would then analyse this data to check for any suspicious activity and then escalate this 
data to the necessary authorities if suspicious activity was found.</p>
                <p>Checking the data manually was very time consuming and prone to being misinterpreted due to 
human error. I was requested to create a data management platform and have the system 
automatically analyse the data, improving user workflow and data integrity in every way possible.</p>
                <br/>
                <p class="italic">Result</p>
                <p>
                    In the process of building this application I have used a variety of services aPd methods to achieve 
the Pecessary results.
                </p>
                <p>
                    Main coding areas covered in this project:
                    <ul class="flex flex-col ml-4">
                        <li>API development (REST APIs, Websocket APIs, HTTP APIs both server based and serverless APIs)</li>
                        <li>Third party API integration</li>
                        <li>Server set up and server migration</li>
                        <li>Database setup and database migration</li>
                        <li>User authentication</li>
                        <li>User interface development</li>
                        <li>Intensive and frequent data analytics</li>
                        <li>Reporting features (exporting data to excel and pdf files)</li>
                        <li>User activity tracking (time spent working, screen playback etc.)</li>
                        <li>Coding macros into excel files</li>
                        <li>Near real-time data updates</li>
                        <li>Web scraping</li>
                    </ul>
                </p>
            </div>
        </div>
        <div class="flex flex-col gap-4 text-[var(--t2)] hover:text-[var(--t1)] transition-colors duration-300">
            <div>
                <h1 class="font-medium text-xl">Websites</h1>
            </div>
            <div class="w-full flex flex-col flex-wrap gap-2">
                <p>I have designed multiple websites for personal projects.</p>
            </div>
        </div>
        <div class="flex flex-col gap-4 text-[var(--t2)] hover:text-[var(--t1)] transition-colors duration-300">
            <div>
                <h1 class="font-medium text-xl">Robotics and electronics</h1>
            </div>
            <div class="w-full flex flex-col flex-wrap gap-2">
                <p>I have basic experience in robotics and electronics.</p>
            </div>
        </div>
    </div>
</template>

<script>
import Skill from './Skill.vue'

export default {
    name: 'Languages',
    components: {
        Skill
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>

ul {
    list-style-type: disc;
    margin-left: 1.5rem; /* Adjust as needed */
}

</style>