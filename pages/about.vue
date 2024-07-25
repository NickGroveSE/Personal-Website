<template>
    <PageTitle class="page" heading="My Story"/>
    <div class="content">
        <ContentDoc path="/pages/aboutme"/>
    </div>
    <PageTitle class="page" heading="My Links & Contact Info"/>
    <div class="contact">
        <div class="contact-title">Github</div>
        <NuxtLink class="contact-link" to="https://github.com/NickGroveSE"><img class="link-img" src="/github-mark.svg" alt="NickGroveSE on Github"></NuxtLink>
    </div>
    <div class="contact">
        <div class="contact-title">Behance</div>
        <NuxtLink class="contact-link" to="https://www.behance.net/nickgrove1"><img class="link-img" src="/behance-square.svg" alt="Nick Grove on Behance"></NuxtLink>
    </div> 
    <div class="contact" id="linkedin-contact">
        <div class="contact-title">Linkedin</div> 
        <NuxtLink class="contact-link" to="https://www.linkedin.com/in/nick-grove-9417b6199/"><img class="link-img" id="linkedin-img" src="/LI-In-Bug.png" alt="Nick Grove on LinkedIn"></NuxtLink>
    </div> 
    <div class="contact" id="email">
        <div class="contact-title" id="email-title">Email:</div>
        <div class="contact-title" id="email-actual">nickgrove.se@gmail.com</div>
    </div>
</template>

<script setup lang="ts">
    import PageTitle from '../components/pagetitle.vue'

    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `About Me` : 'Site Title';
        }
    })

</script>

<style scoped>

.contact {
    vertical-align: top;
    display: inline-block;
    margin: 0 15px 0 15px;
    width: 70px;
    height: 100px;
    font-weight: 300;
    color: #171614;
}

.contact:hover .contact-title {
    font-weight: 700;
    color: #42b883;
    transition: 0.5s;
}

#email {
    width: 200px;
}

.contact-title {
    margin: 5px 0 5px 0;
    text-align: center;
}

#email-title {
    margin-bottom: 20px;
}

.contact-link {
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.link-img {
    width: 70px;
    height: 70px;
    position: relative;
    margin: auto;
}

#linkedin-img {
    width: 82.25px;
    height: 70px;
}

@media (max-width: 550px) {

    #email-title {
        text-align: left;
        margin: 10px 0 5px 0;
    }

    #email-actual {
        text-align: left;
    }

}

</style>