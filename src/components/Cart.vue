<script setup>
    defineProps({
        item:Object
    })
</script>


<template>
    <a>
        <img :src="item.img" alt="">
        <div>
            <h1>{{item.name}}</h1>
            <p>{{item.discription}}</p>
            <p>Цвет: {{item.color}}</p>
            <p class="sell">Стоимость: {{item.price}}</p>
        </div>
    </a>
</template>

<style scoped>
 a {
    display: block;
    background: rgba(75, 115, 247, 0.25);
    width: 95%;
    margin: 10px;
    border: 1px solid black;
    border-radius: 30px;
    transition: all 1s;
    user-select: none;
 }

img {
    aspect-ratio: 1/1;
    border-radius: 30px 30px 0px 0px;
}

div {
    display: flex;
    flex-direction: column;
    padding: 10px;

}

div h1{
    padding-left: 5%;
    font-weight: bold;
    
}

div p, h1{
    padding: 5px 0px 5px 0px;
    font-size: 22px; 
}

div h1 {
    font-size: 24px; 
    

}

a:hover {
    scale: 1.01;
    cursor: pointer;
}

.sell {
    color: #F1117E;
    font-weight: bold;
}
</style>
