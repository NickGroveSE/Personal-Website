<template>
    <div class="edu-wrapper">
        <img class="edu-image" :src="`${imgurl}`">
        <div class="edu-text">
            <div class="heading">{{ heading }}</div>
            <div class="degree">{{ degree }}</div>
            <div class="timeframe">{{ timeframe }}</div>
        </div> 
    </div>
</template>

<script setup>
    defineProps({
        imgurl: String,
        heading: String,
        degree: String,
        timeframe: String
    })
</script>

    

<style scoped>

    .edu-wrapper {
        margin: 20px 0 0 30px;
    }

    .edu-image {
        width: 80px;
        height: 80px;
        display: inline-block;
    }

    .edu-text {
        color: #171614;
        vertical-align: top;
        display: inline-block;
        margin-left: 20px;
    }

    .heading {
        font-size: 28px;
        font-weight: 900;
    }

    .timeframe {
        font-size: 14px;
        font-weight: 300;
        padding-left: 20px;
        font-style: italic;
    }

    .degree {
        font-size: 15px;
        padding-left: 20px;
        font-weight: 700;
    }

</style>