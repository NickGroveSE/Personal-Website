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
}

/* Color Palette */
/*  171614
    a27035
    42b883
    f5f0f6 */

</style>