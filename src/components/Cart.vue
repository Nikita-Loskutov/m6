<script setup>
    defineProps({
        item:Object
    })
</script>


<template>
    <a>
        <img :src="item.img" alt="">
        <h1>{{item.title}}</h1>
        <p>{{item.description}}</p>
        <i v-if = "item.like" class="fa-solid fa-heart" style="color: #ff0000;"></i>
        <i v-else class="far fa-heart"></i>
    </a>
</template>

<style scoped>
 a {
    display: block;
    background: (32, 3 , 86 );
    width: 400px;
    padding: 10px;
 }


</style>
