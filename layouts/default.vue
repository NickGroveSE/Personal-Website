<template>
    <div id="page">
        <div class="blur">

        </div>
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
#page {
    height: 100%;
}

.blur {
    position: absolute;
    background: linear-gradient(rgba(23, 22, 20, 1) 40%, rgba(23, 22, 20, 0));
    width: 150px;
    height: 100px;
    z-index: 10;
}

.page-element {
    position: fixed;
    top: 0;
    display: inline-block;
    margin: 0;
    padding: 0;
    width: 150px;
    height: calc(100% + 2px);
    background-color: #171614;
    border-right: 2px solid #42b883;
    z-index: 0;
}

.page-element::-webkit-scrollbar {
    display: none;
}

.main-content {

    vertical-align: top;
    display: inline-block;
    height: calc(100% + 2px);
    margin: 10px 10px 10px 160px;
    border-top-left-radius: 25px;
    background-color: #f5f0f6;
}

/* Color Palette */
/*  171614
    CE7919
    42b883
    f5f0f6 
    
    D5E6E3
    B6DDD0
    7BCBA9
    */

</style>