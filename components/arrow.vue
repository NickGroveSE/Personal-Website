<template>

    <div class="arrow" :id="$attrs.id"></div>
    
</template>


<script setup>


</script>

<style scoped>

.arrow {
    width: 100px;
    height: 25px;
    margin-left: 5px;
    z-index: 15;
    animation: pulse 3s infinite
}

@keyframes pulse {
  0% {
    transform: translate(0, -10px);
  }
  30% {
    transform: translate(0, 10px);
  }
    100% {
    transform: translate(0, -10px);
  }
}

#arrow-1 {
    margin-bottom: -10px;
    background-image: url('./down-arrow-1.svg');
    background-repeat: no-repeat;
}


#arrow-2 {
    margin-bottom: -10px;
    background-image: url('./down-arrow-2.svg');
    background-repeat: no-repeat;
}

#arrow-3 {
    margin-bottom: -10px;
    background-image: url('./down-arrow-3.svg');
    background-repeat: no-repeat;
}

#arrow-4 {
    background-image: url('./down-arrow-4.svg');
    background-repeat: no-repeat;
}


</style>