<template>
    <PageTitle class="page" heading="Projects & Experience"/>
    <!-- <div class="filters-heading">Filters Coming Soon!</div> -->
    <div class="projects-wrapper">    
        <ProjectTile
            class="projects-page-tile project-tile"
            v-for="project in projects"
            :title="project.title"
            :tags="project.tags"
            :imgurl="project.imgurl"
            :description="project.description"
        />
    </div>

</template>

<script setup lang="ts">
    import PageTitle from '../../components/pagetitle.vue'
    import ProjectTile from '../../components/projecttile.vue'

    const projects = await queryContent("projects").where({ draft: { $ne: true } }).sort({ date: -1 }).find();

    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `My Projects` : 'Site Title';
        }
    })

</script>

<style scoped>
    .projects-wrapper {
        margin: 10px auto 10px auto;
        width: 960px;
    }

    .filters-heading {
        margin-left: 60px;
        color: #42b883;
        font-size: 16px;
        font-weight: 700;
    }

    .project-tile {
        margin: 10px;
        vertical-align: top;
    }

    @media (max-width: 1125px) {

        .projects-wrapper {
            width: 640px;
        }

        
    }

    @media (max-width: 900px) {
        .projects-tile {
            margin: 5px;
        }


    }

    @media (max-width: 790px) {
        
        .projects-wrapper {
            width: 410px;
        }

    }
    
    @media (max-width: 700px) {

        .projects-wrapper {
            margin: 10px auto 10px auto;
        }

        
    }

    @media (max-width: 450px) {

        .projects-wrapper {
            margin: 10px auto 10px auto;
            width: 310px;
        }
    }
</style>