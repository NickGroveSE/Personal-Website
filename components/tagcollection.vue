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
    height: 18px;
}

.tile {
    margin: 5px 0 0 0;
}

.link {
    margin: 5px 0 0 0;
}

.project {
    margin: 0 0 0 10px;
}

.skill {
    margin: 2px 0 0 20px;
}

/* @media (max-width: 500px) {

    ul {
        height: 10px;
    }

} */

</style>