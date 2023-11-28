<template>
    <PageTitle class="page" heading="Projects"/>
    <div class="filters-heading">Filters</div>
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
        margin: 10px 30px 10px 30px;
    }

    .filters-heading {
        margin-left: 40px;
    }

    .projects-tile {
        margin: 10px;
    }

</style>