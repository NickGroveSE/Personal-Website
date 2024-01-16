<template>
    <ul :class="$attrs.class">
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
    padding: 0;
    list-style-type: none;
}

.tile {
    margin: 5px 0 0 0;
    height: 18px;
}

.link {
    margin: 5px 0 0 0;
    height: 18px;
}

.project {
    margin: 0 0 0 10px;
}

</style>