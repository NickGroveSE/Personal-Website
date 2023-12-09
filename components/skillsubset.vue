<template>


    <div>{{ heading }}:     
        <ul>
            <Skill :tags="tags"></Skill>
        </ul>
    </div>

</template>


<script setup>
    import Skill from './skill.vue'

    defineProps({
        heading: String,
        tags: Object
    })

</script>

<style scoped>

div {
    margin: 0 0 15px 0;
    color: #171614;
    font-weight: 900;
    font-size: 22px;
    width: 400px;
    display: inline-block;
}

ul {
    margin: 0 0 0 5px;
    padding: 0;
}

@media (max-width: 700px) {

    div {
        font-size: 18px;
    }

    ul {
        width: 80vw;
    }
    
}


</style>