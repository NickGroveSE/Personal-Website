<template>
    <PageTitle class="page" heading="Who Am I?"/>
    <div class="content">
        <ContentDoc path="/pages/intro"/>
    </div>
    <PageTitle class="page" heading="Highlighted Projects"/>
    <ProjectLink
          :title="firstHighlighted.title"
          :tags="firstHighlighted.tags"
          :imgurl="firstHighlighted.imgurl"
    />
    <ProjectLink
          :title="secondHighlighted.title"
          :tags="secondHighlighted.tags"
          :imgurl="secondHighlighted.imgurl"
    /> 
    <NuxtLink class="more-projects" to="/projects">Check Out More of My Work <img id="arrow" src="/RightArrow.svg"></NuxtLink>
</template>

<script setup lang="ts">
    import ProjectLink from '../components/projectlink.vue'
    import PageTitle from '../components/pagetitle.vue'

    definePageMeta({
        layout: 'home'
    })

    const firstHighlighted = await queryContent("projects").where({ title: { $eq: 'MTGMetaTracker' } }).findOne()
    const secondHighlighted = await queryContent("projects").where({ title: { $eq: 'Iris' } }).findOne()

    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `Nick Grove Dev` : 'Site Title';
        }
    })

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

@media (max-width: 400px) {

    .more-projects {
        width: calc(100vw - 90px);
        font-size: 14px;
    }
    
}

</style>