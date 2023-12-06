<template>
    <PageTitle class="page" heading="My Projects"/>
    <!-- <div class="filters-heading">Filters Coming Soon!</div> -->
    <div class="projects-wrapper">    
        <ProjectTile
            class="projects-tile"
            v-for="project in projects"
            :title="project.title"
            :tags="project.tags"
            :imgurl="project.imgurl"
            :description="project.description"
        />
    </div>

</template>

<script setup>
    import PageTitle from '../../components/pagetitle.vue'
    import ProjectTile from '../../components/projecttile.vue'

    const projects = await queryContent("projects").sort({ date: -1 }).find();

</script>

<style scoped>
    .projects-wrapper {
        margin: 10px 10px 10px 10px;
    }

    .filters-heading {
        margin-left: 60px;
        color: #42b883;
        font-size: 16px;
        font-weight: 700;
    }

    .projects-tile {
        margin: 10px;
    }
    
    @media (max-width: 360px) {

        .projects-wrapper {
            margin: 10px 0 10px 0;
        }
        
    }
</style>