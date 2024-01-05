<template>
    <NuxtLink class="project-link" :to="`/projects/${title}`">
        <ProjectImage id="image" class="link" :imgurl="imgurl" />
        <div class="top-right-container">        
            <ProjectTitle id="title" class="link" :title="title"/>
            <TagCollection id="tags" class="link" :tags="tags"/>
        </div>
        <div class="excerpt">
            <ContentDoc class="excerpt-content" :path="`/projects/${title.split(' ').join('').toLowerCase()}`"></ContentDoc>
            <div class="glimpse"></div>
        </div>
        <div class="read-more">Click to Read More</div>
    </NuxtLink>
</template>


<script setup>
    import TagCollection from './tagcollection.vue'
    import ProjectImage from './projectimage.vue'
    import ProjectTitle from './projecttitle.vue'

    defineProps({
        title: String,
        tags: Object,
        imgurl: String,
    })

</script>

<style scoped>

    .project-link {
        color: #171614;
        margin: 10px 20px 0 20px;
        text-decoration: none;
        display: block;
        padding: 15px;
        width: calc(100vw - 246px);
        height: 265px;
        border: 2px solid rgba(66, 184, 131, 0.15);
        border-radius: 5px; 
    }

    .project-link:hover {
        background-color: #D5E6E3;
        border: 2px solid rgba(66, 184, 131, 1);
        box-shadow: 5px 5px #CE7919;
        transform: translate(-5px, -5px);
        transition: 0.5s;
    }

    /* .project-link:hover .read-more{
        background: linear-gradient(to right, rgba(213, 230, 227, 0), rgba(213, 230, 227, 1));
        transition: 1s;
    } */

    /* .project-link:hover #title {
        color: #f5f0f6;
    } */

    .top-right-container {
        margin-left: 20px;
        padding-top: 5px;
        vertical-align: top;
        display: inline-block;
    }

    #tags {
        overflow: hidden;
    }

    .excerpt {
        position: relative;
        font-size: 16px;
        font-weight: 300;
        max-height: calc(var(--lh) * var(--max-lines));;
        overflow: clip;
        --max-lines: 9;
        text-overflow: ellipsis;
    }

    .read-more {
        width: 100%;
        margin-top: 10px;
        font-size: 16px;
        font-weight: 900;
        color: #42b883;
        text-align: center;
    }

    @media (max-width: 700px) {

        .project-link {
            width: calc(100vw - 90px);
        }

    }

    @media (max-width: 500px) {
        
        .top-right-container {
            width: 175px;
            margin-left: 8px;
        }

        .excerpt {
            font-size: 14px;
        }

    }



</style>