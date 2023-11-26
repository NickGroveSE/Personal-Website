<template>
    <NuxtLink class="project-link" :to="`/projects/${title}`">
        <ProjectImage class="link" :src="imgurl" />
        <div class="top-right-container">        
            <ProjectTitle id="title" class="link" :title="title"/>
            <TagCollection class="link" :tags="tags"/>
        </div>
        <div class="excerpt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nunc id elit porta mollis ac non neque. Nam rhoncus sodales libero, non elementum nulla volutpat nec. 
            Cras tincidunt lobortis orci, eu lacinia nunc elementum at. Pellentesque mattis interdum augue vel ullamcorper. Maecenas at erat nec ante tristique consequat sed non eros. 
            Ut pharetra elit at malesuada iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium convallis lectus id tempor.
        </div>
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
        border: 2px solid rgba(66, 184, 131, 0.15);
        border-radius: 5px; 
    }

    .project-link:hover {
        background-color: rgba(66, 184, 131, 0.15);
        border: 2px solid rgba(66, 184, 131, 1);
        box-shadow: 5px 5px #CE7919;
        transform: translate(-5px, -5px);
        transition: 0.5s;
    }

    /* .project-link:hover #title {
        color: #f5f0f6;
    } */

    .top-right-container {
        margin-left: 20px;
        padding-top: 5px;
        vertical-align: top;
        display: inline-block;
    }

    .excerpt {
        margin-top: 5px;
        font-weight: 300;
    }

</style>