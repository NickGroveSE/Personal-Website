<template>
    <PageTitle class="page" heading="Projects & Experience"/>
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
        vertical-align: top;
    }

    @media (max-width: 900px) {
        .projects-tile {
            margin: 5px;
        }

    }
    
    @media (max-width: 700px) {

        .projects-wrapper {
            margin: 10px 0 10px 0;
        }

        .projects-tile {
            margin-left: 20%;
        }
        
    }

    @media (max-width: 480px) {

        .projects-tile {
            margin: 5px 0 5px 4%;
        }
        
    }
</style>