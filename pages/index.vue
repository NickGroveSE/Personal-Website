<template>
    <h2 class="page-title">Highlighted Projects</h2>
    <ProjectLink
          v-for="project in projects"
          :title="project.title"
          :tags="project.tags"
          :imgurl="project.imgurl"
    />
    <NuxtLink class="more-projects" to="/projects">Check Out More of My Work <img id="arrow" src="/RightArrow.svg"></NuxtLink>
</template>

<script setup>
    import ProjectLink from '../components/projectlink.vue'

    definePageMeta({
        layout: 'home'
    })

    const projects = await queryContent("projects").sort({ date: -1 }).find();


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