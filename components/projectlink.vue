<template>
    <NuxtLink class="link" to="/projects/{{ title.toLowerCase() }}">
        <TagCollection :tags="tags"></TagCollection>
        <ProjectImage class="link" :src="imgurl" />
        <div>{{ title }}</div>
        <div class="bottom-container">
            <div>{{ description }}</div>
        </div>

        

    </NuxtLink>
</template>


<script setup>
    import TagCollection from './tagcollection.vue'
    import ProjectImage from './projectimage.vue'

    defineProps({
        title: String,
        description: String,
        tags: Object,
        imgurl: String,
    })

</script>

<style scoped>

    .link {
        color: #171614;
    }

</style>