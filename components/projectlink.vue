<template>
    <NuxtLink class="link" to="/projects/{{ title.toLowerCase() }}">
        <TagCollection :tags="tags"></TagCollection>
        <div>Image</div>
        <div>{{ title }}</div>
        <div class="bottom-container">
            <div>{{ description }}</div>
        </div>

        

    </NuxtLink>
</template>


<script setup>
    import TagCollection from './tagcollection.vue'

    defineProps({
        title: String,
        description: String,
        tags: Object,
        imgurls: Object,
        links: Object
    })

</script>

<style scoped>

    .link {
        color: #171614;
    }

</style>