<template>
    <MainLayout>
        <h2>Project {{ id }}</h2>
        <p>Something Something Something</p>
        <p>Something Something Something</p>
    </MainLayout>
</template>

<script setup>
    import MainLayout from '@/layouts/main.vue'
    const { id } = useRoute().params
</script>

<style scoped>


</style>