<template>
    <div>
        <Sidebar class="page-element">

        </Sidebar>
        <div class="main-content">
            <slot />
        </div>
    </div>

</template>

<script setup>


</script>

<style scoped>

.page-element {
    display: inline-block;
}

.main-content {
    vertical-align: top;
    display: inline-block;
    margin: 10px;
    border-top-left-radius: 25px;
    background-color: #f5f0f6;
}

/* Color Palette */
/*  171614
    CE7919
    42b883
    f5f0f6 
    
    B6DDD0
    7BCBA9
    */

</style>