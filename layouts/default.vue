<template>
    <div class="page">
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

.page {
    height: 100%;
}

.page-element {
    position: absolute;
    display: inline-block;
    margin: -2px 0 0 0;
    padding: 0;
    height: 100%;
}

.page-element::-webkit-scrollbar {
    display: none;
}

.main-content {
    vertical-align: top;
    display: inline-block;
    margin: 10px 10px 10px 160px;
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