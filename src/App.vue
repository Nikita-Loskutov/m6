<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'


</script>

<template>
   <main>
      <Header></Header>
      <RouterView></RouterView>
      
   </main>
</template>

<style>
   body {
      background: #84b1c4;
      background: linear-gradient(90deg, rgba(132, 177, 196, 1) 0%, rgba(90, 227, 242, 1) 37%, rgb(69, 110, 247) 100%);
   }
   main {
      height: 94vh;
   }
</style>
