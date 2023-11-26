<template>
    
    <PageTitle class="project" :heading="title"/>
    <TagCollection class="project" :tags="project.tags"/>

    <div class="content">
        <ContentDoc :path="`/projects/${title.split(' ').join('').toLowerCase()}`"/>
    </div>
    
</template>

<script setup>
    import PageTitle from '../../components/pagetitle.vue'
    import TagCollection from '../../components/tagcollection.vue'

    const { title } = useRoute().params

    const project = await queryContent("projects").where({ title: { $eq: title}}).findOne();
    
</script>

<style scoped>

</style>