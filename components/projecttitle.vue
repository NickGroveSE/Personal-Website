<template>

    <div :class="$attrs.class">{{ title }}</div>

</template>


<script setup>

    defineProps({
        title: String,
    })

</script>

<style scoped>

div {
    color: #171614;
    font-weight: 900;
}

.recent {
    width: 200px;
    height: 50px;
    margin-left: 10px;
    padding-top: 5px;
    vertical-align: top;
    display: inline-block;
    font-size: 22px;
    
}

.link {
    font-size: 28px;
}

</style>