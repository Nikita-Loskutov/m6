<script setup>
import Cart from '../components/Cart.vue'
import {onMounted, ref } from "vue";
import Loader from '../components/Loader.vue';
 

let data = ref([])

async function getData() {
    let response = await fetch("https://2d67a15116fee664.mokky.dev/product")
    data.value = await response.json()
}

onMounted(async() => {
    await getData()
    await sortData()
})

function sortData() {
    if (sortValue.value == "up") {
        data.value.sort((a,b) => {
            return a.price - b.price;
        });
    }
    else if (sortValue.value == "down") {
        data.value.sort((a,b) => {
            return b.price - a.price;
        });
    }
}

async function searchData() {
    await getData();
    search.value = search.value.trim().toLowerCase();
    data.value = data.value.filter((item) => {
        return (
            item.name.toLowerCase().includes(search.value) ||
            item.discription.toLowerCase().includes(search.value)

        );
    });
}

let sortValue = ref("down")
let search = ref("")
</script>

<template>
    <section>
        <loader v-if="data.length == 0"></loader>
        <label>
            <select v-model="sortValue" @change="sortData">
                <option value="up">По возрастанию цены</option>
                <option value="down">По убыванию цены</option>
            </select>
        </label>
        <label>
            <input v-model="search" @change="searchData" placeholder="Поиск">
        </label>
        <div>
            <Cart v-for="(item, index) in data" :key="index" :item="item"/>
        </div>

    </section>
</template>

<style scoped>

    select {
        width: 10%;
        height: 32px;
        background: #84b1c4;
        border: 1px solid black;
        border-radius: 15px;
        margin: 15px;
    }

    input {
        width: 20%;
        padding: 7px 30px;
        background: #84b1c4;
        border: 1px solid black;
        border-radius: 15px;
        margin: 15px;
    }
    div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    @media all and (max-width: 1440px){
        div{ 
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
    @media all and (max-width: 1024px){
        div{ 
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    @media all and (max-width: 425px){
        div{ 
            grid-template-columns: 1fr 1fr;
        }
    }
</style>
