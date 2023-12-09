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
    padding: 5px;
    margin: 5px 5px 2px 0;
    color: #42b883;
    background-color: #f5f0f6;
    border: 1px solid#42b883;
    border-radius: 2px;
    font-size: 16px;
    font-weight: 700;
}

/* li:hover {
    background-color: #171614;
    color: #f5f0f6;
    cursor: pointer;
    transition: 0.5s;
    padding: 5px 10px 5px 10px;
} */

@media (max-width: 500px) {

    li {
        font-size: 14px;
    }
    
}

</style>