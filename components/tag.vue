<template>

    <li v-for="tag in tags">{{ tag }}</li>

</template>


<script setup>

    defineProps({
        tags: Object
    })

</script>

<style scoped>

li {
    display: inline-block;
    vertical-align: top;
    padding: 2px 5px 2px 5px;
    margin: 0 5px 0 0;
    color: #f5f0f6;
    background-color: #42b883;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 700;
}

</style>