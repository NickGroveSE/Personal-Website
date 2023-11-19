<template>
    <h2 class="page-title">Highlighted Projects</h2>
    <ProjectLink
          v-for="project in projects"
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
          :imgurl="project.imgurl"
    />
</template>

<script setup>
    import ProjectLink from '../components/projectlink.vue'

    definePageMeta({
        layout: 'home'
    })

    const projects = await queryContent("projects").sort({ startedAt: 1 }).limit(3).find();


</script>

<style scoped>

h1{
    height: 60px;
    width: 200px;
    color: black;
}

</style>