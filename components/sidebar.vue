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
    width: 150px;
    background-color: red;
    height: 100vh;
}

ul {
    list-style: none;
    margin: 10px;
    padding: 0px;
}

li {
    text-align: right;
}

</style>