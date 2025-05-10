<script setup>
import Cart from '../components/Cart.vue'
import {onMounted, ref } from "vue";


let data = ref([])

async function getData() {
    let response = await fetch("https://2d67a15116fee664.mokky.dev/product")
    data.value = await response.json()
}

onMounted(() => {
    getData()
})


</script>

<template>
    <section>
        <!-- {{data}} -->
        <Cart v-for="(item, index) in data" :key="index" :item="item"/>

    </section>
</template>

<style scoped>
    section {
        display: grid;
    }
    @media all and (max-width: 1920px){
        section{ 
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
    }
    @media all and (max-width: 1440px){
        section{ 
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
    @media all and (max-width: 1024px){
        section{ 
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    @media all and (max-width: 425px){
        section{ 
            grid-template-columns: 1fr 1fr;
        }
    }
</style>
