<template>
    <div class="introduction-wrapper">
        <div class="introduction-panel">
            <div class="introduction-side" id="introduction-left">
                <img class="profile-image" src="../assets/content/github-profile-pic.jpg"><img>
                <div class="name">Nick Grove</div>
                <div class="career">Full Stack Developer & Web Designer</div>
            </div>
            <div class="introduction-side" id="introduction-right">
                <div class="link-container">
                    <NuxtLink class="link" to="https://www.linkedin.com/in/nick-grove-9417b6199/"><img class="link-img" id="linkedin-img" src="../assets/content/LI-In-Bug.png" alt="Nick Grove on LinkedIn"></NuxtLink>
                    <NuxtLink class="link" to="https://www.behance.net/nickgrove1"><img class="link-img" src="../assets/content/behance-square.svg" alt="Nick Grove on Behance"></NuxtLink>
                    <NuxtLink class="link" to="https://github.com/NickGroveSE"><img class="link-img" src="../assets/content/github-mark.svg" alt="NickGroveSE on Github"></NuxtLink>
                </div>
                <NuxtLink class="link" to="/projects/mock">
                    <div class="recent-project">
                        <div class="recent-pre-title">Most Recent Project</div>
                        <div class="recent-img-and-title">
                            <div class="recent-img"></div>
                            <div class="recent-title-wrapper"><div class="recent-title">MTGMetaTracker</div></div>
                        </div>
                        <div class="recent-description">Using data from mtggoldfish.com to create a website that tracks the popularity of decks within competitive Magic The Gathering.</div>
                        <div class="recent-tags">
                            <ul>
                                <li class="tag">Node.js</li>
                                <li class="tag">Express</li>
                                <li class="tag">EJS</li>
                                <li class="tag">MongoDB</li>
                            </ul>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>

</template>

<script setup>


</script>

<style scoped>

.introduction-wrapper {
    width: 100%;
    height: 100vh;
    background-color: #171614;
    border-bottom: 2px solid #42b883;
    overflow: auto;
}

.introduction-panel {
    width: 600px;
    height: 320px;
    margin-left: auto;
    margin-right: auto;
    margin-top: calc(50vh - 200px);
    background-color: #f5f0f6;
    border-radius: 25px;
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
    width: 320px;
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
    margin-top: 5px;
    font-size: 30px;
    font-weight: 600;
}

.career {
    font-size: 18px;
    font-weight: 200;
}

.link-container {
    height: 40px;
    width: 320px;
}

.link {
    float: right;
    margin-left: 10px;
    text-decoration: none;
}

.link-img {
    width: 40px;
    height: 40px;
}

#linkedin-img {
    width: 47px;
    height: 40px;
}

.recent-project {
    height: 170px;
    width: 280px;
    margin-top: 45px;
    padding: 10px;
    border: 1px solid #42b883;
    border-radius: 5px; 
}

.recent-pre-title {
    height: 18px;
    color: #42b883;
    font-size: 15px;
    font-weight: 200;
}

.recent-img-and-title {
    margin-top: 5px;
}

.recent-img {
    width: 60px;
    height: 60px;
    background: lightgrey;
    display: inline-block;
}

.recent-title-wrapper {
    height: 60px;
    margin-left: 10px;
    vertical-align: top;
    display: inline-block;
}

.recent-title {
    height: 60px;
    display: block;
    font-size: 22px;
    font-weight: 700;
    color: #171614;
}

.recent-description {
    height: 42px;
    width: 270px;
    margin-top: 10px;
    font-size: 12px;
    font-weight: 300;
    color: #171614;
} 

ul {
    margin: 10px 0 0 0;
    padding: 0;
    list-style-type: none;
    height: 20px;
}

.tag {
    display: inline-block;
    vertical-align: top;
    padding: 2px 5px 2px 5px;
    margin: 0 5px 0 0;
    color: #171614;
    border: 1px solid #171614;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 700;
}

</style>