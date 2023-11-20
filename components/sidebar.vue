<template>
<div>
    <ul>
        <li id="current"><NuxtLink class="link" to="/" id="current-link">Home</NuxtLink></li>
        <li><NuxtLink class="link" to="/about">About Me</NuxtLink></li>
        <li><NuxtLink class="link" to="/projects">Projects</NuxtLink></li>
        <li><NuxtLink class="link" to="/skills">Skills & Education</NuxtLink></li>
    </ul>
</div>

</template>


<script setup>

</script>

<style scoped>

div {
    margin-top: -2px;
    padding-top: 25vh;
    width: 130px;
    background-color: #171614;
    height: calc(100vh - 38px);
    border-right: 2px solid #42b883;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    
}

li {
    text-align: right;
    padding: 10px 20px 10px 0;
    margin-left: 30px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
}

.link {
    display: block;
    color: #f5f0f6;
    width: 100%;
    height: 100%;
    font-size: 15px;
    font-weight: 900;
}

#current {
    background-color: #f5f0f6;
    margin-right: -2px;
}

#current-link {
    color: #42b883;
}

</style>