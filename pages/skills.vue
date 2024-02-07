<template>
    <PageTitle class="page" heading="Education"/>
    <Education imgurl="/uofi.png" heading="The University of Iowa" degree="Bachelor's Degree in Computer Science & Engineering" timeframe="August 2016 - May 2020"/>
    <Education id="last-edu" imgurl="/sfdev.png" heading="Salesforce Platform Developer I" timeframe="In Progress"/>
    <PageTitle class="page" heading="Skills"/>
    <!-- <div id="hint">(Click to View Projects for each Skill)</div> -->
    <div class="subsets-wrapper">
        <SkillSubset 
            v-for="subset in subsets"
            :heading="subset.name"
            :tags="subset.tags"
        />
    </div>
</template>

<script setup lang="ts">
    import PageTitle from '../components/pagetitle.vue'
    import SkillSubset from '../components/skillsubset.vue' 
    import Education from '../components/education.vue'

    const subsets = [
        {
            name: "Languages",
            tags: ["JavaScript", "Python", "Golang", "Java", "C++", "Swift"]

        },
        {
            name: "Frontend",
            tags: [ "Vue", "React", "HTML/CSS", "Sass"]
        },
        {
            name: "Backend",
            tags: ["Express"]
        },
        {
            name: "Databases",
            tags: ["MongoDB"]
        },
        {
            name: "Design",
            tags: ["Figma"]
        }
    ]

    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `My Skills & Education` : 'Site Title';
        }
    })

</script>

    

<style scoped>

    #hint {
        font-size: 14px;
        margin: -10px 0 10px 10px;
    }

    .subsets-wrapper {
        margin-left: 30px;
    }

    #last-edu {
        margin-bottom: 40px;
    }

    @media (max-width: 700px) {

        .subsets-wrapper {
            margin-left: 20px;
        }
        
    }

</style>