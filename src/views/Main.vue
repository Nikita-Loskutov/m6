<script setup>
import Cart from '../components/Cart.vue'
import {ref } from "vue";

let count = ref(0);

let data = [
    {
        img: "https://image.winudf.com/v2/image/bW9iaS5hbmRyb2FwcC5wcm9zcGVyaXR5YXBwcy5jNTExMV9zY3JlZW5fN18xNTI0MDQxMDUwXzAyMQ/screen-7.jpg?fakeurl=1&type=.jpg",
        title: "Котик",
        description: "Это котик",
        like: true
    },
    {
        img: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/1546452217/600001112528b0.jpeg",
        title: "Собака",
        description: "Это собака",
        like: false

    },
]

setInterval (() => {
    count.value++;
},500);
</script>

<template>
    <section>
        {{count}}
        <Cart v-for="(item, index) in data" :key="index" :item="item"/>

    </section>
</template>

<style scoped>

</style>
