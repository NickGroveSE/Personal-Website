<template>
    <div class="introduction-wrapper">
        <div class="introduction-panel">
            <div class="introduction-side" id="introduction-left">
                <img class="profile-image" src="../assets/content/github-profile-pic.jpg">
                <div class="name">Nick Grove</div>
                <div class="career">Full Stack Developer & Web Designer</div>
            </div>
            <div class="introduction-side" id="introduction-right">
                <div class="link-container">
                    <NuxtLink class="link" to="https://www.linkedin.com/in/nick-grove-9417b6199/"><img class="link-img" id="linkedin-img" src="../assets/content/LI-In-Bug.png" alt="Nick Grove on LinkedIn"></NuxtLink>
                    <NuxtLink class="link" to="https://www.behance.net/nickgrove1"><img class="link-img" src="../assets/content/behance-square.svg" alt="Nick Grove on Behance"></NuxtLink>
                    <NuxtLink class="link" to="https://github.com/NickGroveSE"><img class="link-img" src="../assets/content/github-mark.svg" alt="NickGroveSE on Github"></NuxtLink>
                </div>
                <NuxtLink class="recent-project-link" to="/projects/MTGMetaTracker" >
                    <div class="recent-project">
                        <div class="recent-pre-title">Most Recent Project</div>
                        <div class="recent-img-and-title">
                            <ProjectImage class="recent" :src="projects[0].imgurl"/>
                            <ProjectTitle class="recent" :title="projects[0].title"/>
                        </div>
                        <div class="recent-description">{{ projects[0].description }}</div>
                        <div class="recent-tags">
                            <TagCollection class="recent" :tags="projects[0].tags"/>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <NuxtLink class="page-down" to="#page">
            Click Me
        </NuxtLink>
    </div>

</template>

<script setup>
    import TagCollection from './tagcollection.vue'
    import ProjectImage from './projectimage.vue'
    import ProjectTitle from './projecttitle.vue'

    const projects = await queryContent("projects").sort({ date: -1 }).find();

    // const imageClassObject = reactive({
    //     recent: true,
    // })

</script>

<style scoped>

.introduction-wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #171614;
    overflow: auto;
    z-index: 10;
}

.introduction-panel {
    width: 584px;
    height: 320px;
    margin-left: auto;
    margin-right: auto;
    margin-top: calc(50vh - 200px);
    background-color: #f5f0f6;
    border-radius: 25px;
    box-shadow: 10px 10px #CE7919;
}

.introduction-side {
    display: inline-block;
}

#introduction-left {
    width: 200px;
    height: 280px;
    background-color: #42b883;
    border-radius: 25px;
    padding: 20px;
    vertical-align: top;
    color: #f5f0f6 ;
}

#introduction-right {
    width: 304px;
    height: 280px;
    padding: 20px;
}

.profile-image {
    height: 200px;
    width: 200px;
    border-radius: 100px;
}

.name {
    height: 33px;
    width: 200px;
    font-size: 30px;
    font-weight: 900;
}

.career {
    font-size: 18px;
    font-weight: 200;
}

.link-container {
    height: 40px;
    width: 304px;
}

.link {
    float: right;
    margin-left: 10px;
}

.link-img {
    width: 40px;
    height: 40px;
}

#linkedin-img {
    width: 47px;
    height: 40px;
}

.recent-project-link {
    display: block;
    margin-top: 50px;
    margin-left: 0;
    width: 304px;
    text-decoration: none;
}

.recent-project {
    height: 165px;
    width: 280px;
    padding: 10px;
    border: 2px solid rgba(66, 184, 131, 0.15);
    border-radius: 5px; 
    
}

.recent-project:hover {
    border: 2px solid #42b883;
    transition: 0.5s;
}

.recent-pre-title {
    height: 18px;
    color: #42b883;
    font-size: 15px;
    font-weight: 700;
}

.recent-img-and-title {
    margin-top: 5px;
}

/* .recent-title {

} */

.recent-description {
    height: 42px;
    width: 280px;
    margin-top: 5px;
    font-size: 12px;
    font-weight: 300;
    color: #171614;
} 

.recent-tags {
    overflow: hidden;
}

</style>