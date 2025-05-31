<script setup>
import { ref } from "vue";

let name = ref("");
let disc_small = ref("");
let color = ref("");
let price = ref("");
let discription = ref("");
let img = ref("");


function sendItem() {
    let data = {
        "img": img.value,
        "name": name.value,
        "discription": discription.value,
        "disc_small": disc_small.value,
        "price": price.value,
        "color": color.value,
    }
    fetch("https://2d67a15116fee664.mokky.dev/product",
    {
        method:"POST",
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(data),
    } 
    );
    name.value = "";
    disc_small.value = "";
    color.value = "";
    price.value = "";
    discription.value = "";
    img.value = "";
}

</script>


<template>
    <form @submit.prevent="sendItem">
        <div class="labels">
            <label>
                <p>Введите ссылку на картинку</p>
                <input v-model="img" placeholder="Введите ссылку на картинку" required/>
            </label>
            <label>
                <p>Введите название товара</p>
                <input v-model="name" placeholder="Введите название товара" required/>
            </label>
            <label>
                <p>Введите короткое описание</p>
                <input v-model="disc_small" placeholder="Введите короткое описание" required/>
            </label>
            <label>
                <p>Введите цвет</p>
                <input v-model="color" placeholder="Введите цвет" required/>
            </label>
            <label>
                <p>Введите цену</p>
                <input v-model="price" placeholder="Введите цену" required/>
            </label>
            <label>
                <p>Введите описание</p>
                <input v-model="discription" placeholder="Введите описание" required/>
            </label>
            
        </div>
        <a>
            <img v-if="img" :src="img"/>
            <div>
                <h1>{{name}}</h1>
                <p>Цвет: {{color}}</p>
                <p class="sell">Стоимость: {{price}}</p>
                <p>{{disc_small}}</p>
            </div>
        </a>
        <button class="button" type="submit">Сохранить</button>
        <p></p>
        
    </form>
</template>

<style scoped>


.labels label {
    display: flex;
    margin-top: 10px;
}

.labels input {
    margin-left: 15px;
    border-radius: 10px;
    padding: 5px;
}

.button {
    width: 12%;
    padding: 10px;
    margin-top: 15px;
    border-radius: 15px;
    background-color: aliceblue;
    transition:1s all;
    margin-left: 85px;
}

.button:hover{
    background-color: rgb(158, 157, 157);
    scale: 1.05;
}

 a {
    display: block;
    background: rgba(75, 115, 247, 0.25);
    width: 400px;
    margin: 10px;
    border: 1px solid black;
    border-radius: 30px;
    transition: all 1s;
    user-select: none;

 }

img {
    aspect-ratio: 1/1;
    border-radius: 30px 30px 0px 0px;
    width: 400px;
    height: 500px;
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
