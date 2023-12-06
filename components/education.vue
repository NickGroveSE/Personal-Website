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

    @media (max-width: 800px) {
        
        .edu-wrapper {
            margin: 20px 0 0 15px;
        }
        .edu-text {
            margin-left: 10px;
            width: calc(100% - 80px);
        }

        .edu-image {
            width: 70px;
            height: 70px;
        }

        .heading {
            font-size: 20px;
        }

        .degree {
            font-size: 14px;
            padding-left: 10px;
        }

        .timeframe {
            font-size: 13px;
            padding-left: 10px;
        }

    }

    @media (max-width: 550px) {
        
        .edu-wrapper {
            margin: 20px 0 0 5px;
        }

        .edu-text {
            margin-left: 5px;
            width: calc(100% - 70px)
        }
        .edu-image {
            width: 60px;
            height: 60px;
        }
        
        .heading {
            font-size: 18px;
        }

        .degree {
            font-size: 12px;
            padding-left: 5px;
            max-width: 250px;
        }

        .timeframe {
            font-size: 11px;
            padding-left: 5px;
        }

    }

    @media (max-width: 400px) {
        
        .heading {
            width: 220px;
        }
    }

</style>