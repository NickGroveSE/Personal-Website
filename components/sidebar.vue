<template>
<div>
    <ul>
        <li><NuxtLink class="link" to="/">Home</NuxtLink></li>
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
    width: 150px;
    background-color: #171614;
    border-right: 2px solid #42b883;
    
}

ul {
    list-style: none;
    margin: 0;
    padding: 25vh 0 0 0;
    
}

li {
    text-align: right;
    margin-left: 50px;
}

.link {
    display: block;
    color: #f5f0f6;
    padding: 8px 20px 8px 0;
    font-size: 15px;
    font-weight: 900;
}

.link:hover {
    background-color: #42b883;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    box-shadow: -2px 2px #CE7919;
    transform: translate(2px, -2px);
    transition: 0.5s;
}


</style>