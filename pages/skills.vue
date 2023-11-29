<template>
    <PageTitle class="page" heading="Skills"/>
    <div class="subsets-wrapper">
        <SkillSubset 
            v-for="subset in subsets"
            :heading="subset.name"
            :tags="subset.tags"
        />
    </div>
    <PageTitle class="page" heading="Education"/>
</template>

<script setup>
    import PageTitle from '../components/pagetitle.vue'
    import SkillSubset from '../components/skillsubset.vue' 

    const subsets = [
        {
            name: "Languages",
            tags: ["JavaScript: 3 years","Python: 2 years", "Java: 2 years", "C/C++: 2 years"]
        },
        {
            name: "Frontend",
            tags: ["Vue: 0.5 years", "React: 0.5 years"]
        },
        {
            name: "Backend",
            tags: ["Express: 0.5 years"]
        },
        {
            name: "Databases",
            tags: ["MySQL: 1 years", "MongoDB: 0.5 years"]
        },
        {
            name: "Design",
            tags: ["Figma: 3 years"]
        }
    ]

</script>

    

<style scoped>


</style>