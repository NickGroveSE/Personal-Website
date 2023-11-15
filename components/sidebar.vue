<template>
<div>
    <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About Me</NuxtLink></li>
        <li><NuxtLink to="/projects">Projects</NuxtLink></li>
        <li><NuxtLink to="/skills">Skills & Education</NuxtLink></li>
    </ul>
</div>

</template>


<script setup>

</script>

<style scoped>

div {
    margin-top: -2px;
    width: 150px;
    background-color: #171614;
    height: 100vh;
    border-right: 2px solid #42b883;
}

ul {
    list-style: none;
    margin: 10px;
    padding: 0px;
}

li {
    text-align: right;
}

a {
    text-decoration: none;
    color: #f5f0f6;
}

</style>