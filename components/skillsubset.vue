<template>


    <div>{{ heading }}: <TagCollection class="skill" :tags="tags"/></div>

</template>


<script setup>
    import TagCollection from '../components/tagcollection.vue'

    defineProps({
        heading: String,
        tags: Object
    })

</script>

<style scoped>

div {
    margin: 0 0 15px 0;
    color: #171614;
    font-weight: 900;
    font-size: 22px;
    width: 400px;
    display: inline-block;
}


</style>