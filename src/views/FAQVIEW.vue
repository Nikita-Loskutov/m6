<script setup>
import {ref } from "vue";

let data = [
  {
    quest: "1.Как сделать заказ?",
    answer: "Вы можете оформить заказ через наш сайт, выбрав нужный товар и заполнив форму с контактной информацией. После подтверждения — мы свяжемся с вами.",
  },
  {
    quest: "2.Сколько времени занимает доставка?",
    answer: "Сроки доставки зависят от вашего региона. В среднем, доставка по городу занимает 1–3 рабочих дня, по стране — до 7 дней.",
  },
  {
    quest: "3.Можно ли вернуть товар, если он не подошёл?",
    answer: "Да, вы можете вернуть товар в течение 14 дней с момента получения, при условии сохранности упаковки и товарного вида.",
  },
  {
    quest: "4.Как узнать, что мой заказ принят?",
    answer: "После оформления заказа вы получите письмо или SMS с подтверждением. Также вы можете отслеживать статус в личном кабинете.",
  },
  {
    quest: "5.Какие способы оплаты вы принимаете?",
    answer: "Мы принимаем оплату картами Visa, MasterCard, а также через Apple Pay, Google Pay и банковский перевод.",
  },
  {
    quest: "6.Есть ли у вас физический магазин?",
    answer: "Нет, мы работаем только онлайн, что позволяет нам держать цены ниже и оперативно обрабатывать заказы.",
  },
  {
    quest: "7.Как получить скидку?",
    answer: "Подпишитесь на нашу рассылку и получите скидку на первый заказ. Также следите за акциями на сайте.",
  },
  {
    quest: "8.Могу ли я изменить заказ после его оформления?",
    answer: "Да, если заказ ещё не передан в доставку. Свяжитесь с нашей поддержкой как можно скорее.",
  },
  {
    quest: "9.Что делать, если я получил повреждённый товар?",
    answer: "Пожалуйста, свяжитесь с нашей службой поддержки в течение 24 часов, приложив фото повреждений — мы решим вопрос в вашу пользу.",
  },
  {
    quest: "10.Как связаться с поддержкой?",
    answer: "Вы можете написать нам через форму на сайте, в чат или на почту support@example.com. Мы отвечаем в течение 1 рабочего дня.",
  },
];



let ans_active = ref(0);

</script>

<template>
  <section>
    <div v-for="(item, index) in data" :key="index">
        <div class="faq">
            <nav>
                <h1>
                    {{item.quest}}
                </h1>
                <i class="fas fa-plus" @click="ans_active=index"></i>

            </nav>
            <p :class="{'active': ans_active==index}">
                {{item.answer}}
            </p>
        </div>
    </div>
  </section>
</template>

<style scoped>
    section {
        
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 10px;
    }
    .faq {
        border: 1px solid black;
        border-radius: 15px;
    }
    nav {
        display: flex;

        align-items: center;
        justify-content: space-between;
        padding: 2px;
    }

    h1 {
        font-size: 30px;
        padding-left: 20px;

    }

    i {
        font-size: 20px;
        padding-right: 20px;


    }
    p {
        font-size: 27px;
        padding: 3px;
        padding-left: 20px;
        max-height: 0px;
        overflow: hidden;
        transition: 2s;
    }

    .active {
        max-height: 400px;
    }
</style>
