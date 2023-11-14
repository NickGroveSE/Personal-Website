<template>
    <div>
        <Sidebar class="page-element">

        </Sidebar>
        <div class="main-content">
            <slot />
        </div>
    </div>

</template>

<script>
    import SideBar from '../components/sidebar.vue'
</script>

<style scoped>

.page-element {
    display: inline-block;
}

.main-content {
    float: right;
    width: calc(100vw - 171px);
    margin: 10px;
}

</style>