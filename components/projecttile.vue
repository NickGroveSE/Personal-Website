<template>
    <NuxtLink :class="$attrs.class" :to="`/projects/${title}`" >
        <div class="project">
            <div class="img-and-title">
                <ProjectImage class="tile" :imgurl="imgurl"/>
                <ProjectTitle class="tile" :title="title"/>
            </div>
            <div class="tags">
                <TagCollection class="tile" :tags="tags"/>
            </div>
            <div class="description">{{ description }}</div>
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
        description: String
    })

</script>

<style scoped>

    .project-tile {
        display: inline-block;
        margin-left: 0;
        width: 300px;
        text-decoration: none;
    }

    .project {
        height: 140px;
        width: 280px;
        padding: 10px;
        border: 2px solid rgba(66, 184, 131, 0.15);
        border-radius: 5px; 
        
    }

    .project:hover {
        background-color: #D5E6E3;
        border: 2px solid #42b883;
        transition: 0.5s;
    }

    .img-and-title {
        margin-top: 5px;
    }

    .description {
        height: 42px;
        margin-top: 5px;
        font-size: 12px;
        font-weight: 300;
        color: #171614;
    } 

    .tags {
        overflow: hidden;
    }

    @media (max-width: 790px) {

        .projects-page-tile {
            width: 400px;
        }

        .recent-project {
            width: 300px;
        } 

        .recent-project .project {
            height: 140px;
            width: 280px;
        }

        .project {
            height: 140px;
            width: 380px;
        }

    }

    @media (max-width: 450px) {

        .projects-page-tile {
            width: 300px;
        }

        .project {
            height: 140px;
            width: 280px;
        }

    }

</style>