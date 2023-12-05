<template>
    
    <PageTitle class="project" id="title" :heading="title"/>
    <div class="link-container">
        <NuxtLink v-if="project.linkimgurls" v-for="(image, index) in project.linkimgurls"  class="link" :to="`${project.links[index]}`"><img class="link-img" :src="image"></NuxtLink>
    </div>
    <TagCollection class="project" id="tags" :tags="project.tags"/>

    <div class="content">
        <ContentDoc :path="`/projects/${title.split(' ').join('').toLowerCase()}`"/>
        
    </div>
    
</template>

<script setup>
    import PageTitle from '../../components/pagetitle.vue'
    import TagCollection from '../../components/tagcollection.vue'

    const { title } = useRoute().params

    const project = await queryContent("projects").where({ title: { $eq: title}}).findOne();
    
</script>

<style scoped>

#title {
    vertical-align: top;
    display: inline-block;
}

#tags {
    margin-left: 15px;
}
.link-container {
    vertical-align: top;
    display: inline-block;
}

.link-img {
    width: 50px;
    height: 50px;
}

@media (max-width: 700px) {

    .link-container {
        margin-top: -50px;
    }

    .link-img {
        width: 30px;
        height: 30px;
    }

    #tags {
        margin: -30px 0 0 60px;
    }
    
}

/* @media (max-width: 500px) {



    
    
} */


</style>