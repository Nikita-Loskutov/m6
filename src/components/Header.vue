<script setup>


let data = [
  {
    path: "/",
    name: "Главная",
  },
  {
    path: "/faq",
    name: "Помощь",
  },
  {
    path: "/admin",
    name: "Админ",
  },
];
</script>

<template>
    <header>
        <router-link :to="item.path" v-for="(item, index) in data" :key="index">
            {{item.name}}
        </router-link>
    </header>

</template>

<style scoped>
    header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 50px;
        width: 100%;
        background: rgba(0, 0, 0, 0.507);
        backdrop-filter: blur(5px);
    }


    a {
        text-decoration: none;
        color: white;
        text-transform: none;
        transition: 1s ease;
        font-size: 20px;
    }

    a:hover {
        color: #575757;
    }


    .router-link-active {
        color: #8EAAFB;
        box-shadow: 0 2px 0 0 currentColor;
    }


    #lines {
        display: none;
        font-size: 24px;
        background: linear-gradient(90deg, rgb(60, 44, 182) 0%, rgb(73, 43, 155) 35%, rgb(103, 18, 189) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
