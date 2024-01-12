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

ul {
    list-style: none;
    margin: 0;
    padding: 40vh 0 0 0;

}

li {
    text-align: right;
    margin-left: 40px;
}

.link {
    display: block;
    color: #f5f0f6;
    padding: 8px 15px 8px 5px;
    font-size: 18px;
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

@media (max-width: 700px) {

    .link:hover {
        transition: 0s;
    }
    
}


</style>