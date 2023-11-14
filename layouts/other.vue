<template>
    <div>
        <div class="main-content">
            <slot />
        </div>
        <Sidebar>

        </Sidebar>
    </div>

</template>

<script>
    import SideBar from '../components/sidebar.vue'
</script>

<style scoped>

div {
    display: inline-block;
}

.main-content {
    width: calc(100vw - 200px)
}

</style>