<template>
    <PageTitle class="page" heading="About Me"/>
    <div class="content">
        <ContentDoc path="/pages/aboutme"/>
    </div>
    <PageTitle class="page" heading="My Links & Contact Info"/>
    <div class="contact">
        <div class="contact-title">Github</div>
        <NuxtLink class="contact-link"><img class="link-img" src="/github-mark.svg" alt="NickGroveSE on Github"></NuxtLink>
    </div>
    <div class="contact">
        <div class="contact-title">Behance</div>
        <NuxtLink class="contact-link"><img class="link-img" src="/behance-square.svg" alt="Nick Grove on Behance"></NuxtLink>
    </div> 
    <div class="contact" id="linkedin-contact">
        <div class="contact-title">Linkedin</div> 
        <NuxtLink class="contact-link"><img class="link-img" id="linkedin-img" src="/LI-In-Bug.png" alt="Nick Grove on LinkedIn"></NuxtLink>
    </div> 
    <div class="contact" id="email">
        <div class="contact-title" id="email-title">Email:</div>
        <div class="contact-title">nickgrove.se@gmail.com</div>
    </div>
</template>

<script setup>
    import PageTitle from '../components/pagetitle.vue'

</script>

<style scoped>

.contact {
    vertical-align: top;
    display: inline-block;
    margin-left: 30px;
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

</style>