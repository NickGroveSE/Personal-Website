<template>
    <PageTitle class="page" heading="Highlighted Projects"/>
    <ProjectLink
          :title="MTGMetaTracker.title"
          :tags="MTGMetaTracker.tags"
          :imgurl="MTGMetaTracker.imgurl"
    />
    <ProjectLink
          :title="WordleSolver.title"
          :tags="WordleSolver.tags"
          :imgurl="WordleSolver.imgurl"
    /> 
    <NuxtLink class="more-projects" to="/projects">Check Out More of My Work <img id="arrow" src="/RightArrow.svg"></NuxtLink>
</template>

<script setup>
    import ProjectLink from '../components/projectlink.vue'
    import PageTitle from '../components/pagetitle.vue'

    definePageMeta({
        layout: 'home'
    })

    const MTGMetaTracker = await queryContent("projects").where({ title: { $eq: 'MTGMetaTracker' } }).findOne()
    const WordleSolver = await queryContent("projects").where({ title: { $eq: 'Wordle Solver' } }).findOne()


</script>

<style scoped>

.more-projects {
    display: block;
    color: #CE7919;
    border: 2px solid rgba(206, 121, 25, 0.15);
    margin: 10px auto 0 auto;
    width: 280px;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
}

.more-projects:hover {
    border: 2px solid rgba(206, 121, 25, 1);
    transition: 0.5s;
}

#arrow {
    vertical-align: middle;
}

</style>