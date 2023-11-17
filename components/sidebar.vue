<template>
<div>
    <ul>
        <li><NuxtLink class="sidebar-link" to="/">Home</NuxtLink></li>
        <li><NuxtLink class="sidebar-link" to="/about">About Me</NuxtLink></li>
        <li><NuxtLink class="sidebar-link" to="/projects">Projects</NuxtLink></li>
        <li><NuxtLink class="sidebar-link" to="/skills">Skills & Education</NuxtLink></li>
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
    height: calc(100vh + 2px);
    border-right: 2px solid #42b883;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

li {
    text-align: right;
    padding: 5px 20px 5px 20px;
}

.sidebar-link {
    display: block;
    text-decoration: none;
    color: #f5f0f6;
    width: 100%;
    height: 100%;
    font-size: 15px;
    font-weight: 900;
}

</style>