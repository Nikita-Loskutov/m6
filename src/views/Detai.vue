<script setup>
import Cart from '../components/Cart.vue'
import {onMounted, ref } from "vue";
import { useRoute } from 'vue-router';

let route = useRoute()


let data = ref([])
let detail = ref()


async function getData() {
    let response = await fetch("https://2d67a15116fee664.mokky.dev/product")
    data.value = await response.json()
}

onMounted(async () => {
    await getData()
    await getDataId()
})

function getDataId() {
    for (let i of data.value) {
        if (i.id == route.params.id) {
            detail.value = i
        }
    }
}
</script>

<template>
    <section v-if="detail">
        <div class="imgblock">
            <img :src="detail.img" alt="">
        </div>
        <div>
            <h1>{{detail.name}}</h1>
            <p class="discript">{{detail.discription}}</p>
            <p>Цвет: {{detail.color}}</p>
            <p class="sell">Стоимость: {{detail.price}}</p>
        </div>
    </section>
</template>


<style scoped>


section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 50px;
    user-select: none;

}

img {
    width: 400px;
    height: 450px;
    aspect-ratio: 1/1;
    border-radius: 30px 30px 30px 30px;
}

.imgblock {
    width: 400px;
}

div {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 40%;


}

div h1{
    padding-left: 5%;
    font-weight: bold;
    
}

div p, h1{
    padding: 5px 0px 5px 0px;
    font-size: 24px; 
}

div h1 {
    font-size: 28px; 
    

}

a:hover {
    scale: 1.01;
    cursor: pointer;
}

.discript {
    max-width: 80%;
}

.sell {
    color: #F1117E;
    font-weight: bold;
}
</style>
