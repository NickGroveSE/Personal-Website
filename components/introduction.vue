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
                    <NuxtLink class="link" to="https://www.linkedin.com/in/nick-grove-9417b6199/"><img class="link-img" id="linkedin-img" src="/LI-In-Bug.png" alt="Nick Grove on LinkedIn"></NuxtLink>
                    <NuxtLink class="link" to="https://www.behance.net/nickgrove1"><img class="link-img" src="/behance-square.svg" alt="Nick Grove on Behance"></NuxtLink>
                    <NuxtLink class="link" to="https://github.com/NickGroveSE"><img class="link-img" src="/github-mark.svg" alt="NickGroveSE on Github"></NuxtLink>
                </div>
                <div class="recent-pre-title">What I Am Currently Working On</div>
                <ProjectTile
                    class="recent-project"
                    :title="projects[0].title"
                    :tags="projects[0].tags"
                    :imgurl="projects[0].imgurl"
                    :description="projects[0].description"
                />
            </div>
        </div>
        <div class="page-down-wrapper">
            <NuxtLink class="page-down" to="#page">
                <Arrow id="arrow-1"></Arrow>
                <Arrow id="arrow-2"></Arrow>
                <Arrow id="arrow-3"></Arrow>
                <Arrow id="arrow-4"></Arrow>
            </NuxtLink>
        </div>

    </div>

</template>

<script setup>
    import Arrow from './arrow.vue'
    import ProjectTile from './projecttile.vue'

    const projects = await queryContent("projects").sort({ date: -1 }).find();

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

.page-down-wrapper {
    position: relative;
    width: 100px;
    height: 70px;
    margin: calc(100vh - (50vh + 220px)) auto 0 auto;
    vertical-align: bottom;
}

.page-down {
    display: inline-block;
    width: 100%;
    height: 100%;
    transition: 1s;
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

.recent-pre-title {
    height: 18px;
    color: #42b883;
    font-size: 15px;
    font-weight: 700;
    margin: 55px 0 2px 10px
}

@media (max-width: 700px) {
    
    #introduction-right {
        width: 80px;
    }

    .introduction-panel {
        width: 320px;
    }

    .recent-pre-title {
        display: none;
    }

    .recent-project {
        display: none;
    }

    .link-container { 
        width: 40px;
    }

}

@media (max-width: 400px) {

    #introduction-left {
        height: 260px;
        width: 180px;
    }

    .introduction-panel {
        height: 300px;
        width: 220px;
    }

    .profile-image {
        width: 180px;
        height: 180px;
    }

    .name {
        width: 180px;
    }

    .career {
        width: 180px;
    }


}

</style>