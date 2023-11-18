<template>
    <ul>
        <Tag :tags="tags"></Tag>
    </ul>
</template>


<script setup>

    import Tag from './tag.vue'

    defineProps({
        tags: Object
    })

</script>

<style scoped>

ul {
    margin: 10px 0 0 0;
    padding: 0;
    list-style-type: none;
    height: 20px;
}

</style>