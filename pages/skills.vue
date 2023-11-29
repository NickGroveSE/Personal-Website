<template>
    <PageTitle class="page" heading="Education"/>
    <Education imgurl="/uofi.png" heading="The University of Iowa" degree="Bachelor's Degree in Computer Science & Engineering" timeframe="August 2016 - May 2020"/>
    <Education id="last-edu" imgurl="/sfassociate.png" heading="Salesforce Associate (In Progress)" timeframe="September 2023 - Current"/>
    <PageTitle class="page" heading="Skills"/>
    <div class="subsets-wrapper">
        <SkillSubset 
            v-for="subset in subsets"
            :heading="subset.name"
            :tags="subset.tags"
        />
    </div>
</template>

<script setup>
    import PageTitle from '../components/pagetitle.vue'
    import SkillSubset from '../components/skillsubset.vue' 
    import Education from '../components/education.vue'

    const subsets = [
        {
            name: "Languages",
            tags: ["JavaScript","Python", "Java", "C/C++", "Swift"]
        },
        {
            name: "Frontend",
            tags: ["Vue", "React"]
        },
        {
            name: "Backend",
            tags: ["Express"]
        },
        {
            name: "Databases",
            tags: ["MySQL", "MongoDB"]
        },
        {
            name: "Design",
            tags: ["Figma"]
        }
    ]

</script>

    

<style scoped>

    .subsets-wrapper {
        margin-left: 30px;
    }

    #last-edu {
        margin-bottom: 40px;
    }

</style>