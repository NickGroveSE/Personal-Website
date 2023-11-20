<template>

    <img :class="$attrs.class">

</template>


<script setup>

</script>

<style scoped>

    img {
        display: inline-block;
        border-radius: 5px;
        background-color: #f5f0f6;
        border: 1px solid #f5f0f6;
    }

    .recent{
        width: 60px;
        height: 60px;
    }

    .link {
        width: 80px;
        height: 80px;
    }

</style>