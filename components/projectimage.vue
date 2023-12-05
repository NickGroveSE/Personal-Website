<template>

    <img v-if="imgurl" :class="$attrs.class" :src="imgurl">
    <div v-else :class="$attrs.class">No Image</div>

</template>


<script setup>

    defineProps({
        imgurl: String
    })


</script>

<style scoped>

    img {
        display: inline-block;
        border-radius: 5px;
        background-color: #f5f0f6;
    }

    div {
        display: inline-block;
        border-radius: 5px;
        background-color: lightgray;
        border: 2px solid #CE7919;
        font-size: 14px;
        color: #171614;
        text-decoration: italic;
        text-align: center;
        vertical-align: middle;
    }

    .tile {
        width: 60px;
        height: 60px;
    }

    .link {
        width: 80px;
        height: 80px;
    }

    @media (max-width: 500px) {

        .link {
            width: 60px;
            height: 60px;
        }
        
    }

</style>