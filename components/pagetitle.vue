<template>

<h2 :class="$attrs.class">{{ $attrs.heading }}</h2>

</template>


<script setup>


</script>

<style scoped>

h2 {
    font-size: 30px;
    font-weight: 900;
    margin: 10px;
}

.page {
    color: #42b883;
}

.project {
    color: #171614;
}

@media (max-width: 700px) {

    h2:first-child {
        margin: -50px 10px 10px 60px;
    }

}

@media (max-width: 600px) {

    h2 {
        font-size: 24px;
    }
    
}

</style>