<template>
  <div class="container">
    <CardList
      v-if="!cardsIsLoading"
      :cards="cards"
      @click-by-card="openCardForEdit"
    />
    <p v-else class="loading-par" >Loading...</p>
    <CardEdit
      :card="cardForEdit"
      @set-new-course="updateCard"
      @save-card="saveCard"
      @cancel="cancelSave"
      id="edit"
    />
  </div>
</template>

<script setup>
import CardList from "./components/CardList.vue";
import CardEdit from "./components/CardEdit.vue";
import { ref } from "vue";

const cards = ref([]);
const cardsIsLoading = ref(false);

const loading = () => {
  cardsIsLoading.value = true;
  setTimeout(() => {
    cards.value = [
      {
        id: 1,
        name: "Python-разработчик",
        discription:
          "На Python пишут сайт, приложения, игры, чат-боты. Netflix, Spotify, Googleн и Youtube написаны на Python",
        isActive: true,
      },
      {
        id: 2,
        name: "Графический дизайнер",
        discription:
          "Научим делать бренды узнаваемыми через создание логотипов, графики для рекламы, упаковкине только.",
        isActive: true,
      },
      {
        id: 3,
        name: "Веб-разработчик",
        discription:
          "Веб-разработчик создаёт сайты, сервисы и приложения, которыми мы ежедневно пользуемся.",
        isActive: true,
      },
      {
        id: 4,
        name: "Инженер по тестированию",
        discription:
          "Вы научитесь находить ошибки в работе сайтов и приложений с помощью ]ava, JavaScrjpt или Python.",
        isActive: true,
      },
      
    ], cardsIsLoading.value = false}, 2000);
};

loading();

const cardForEdit = ref({
  id: 0,
  name: "",
  discription: "",
  isActive: true,
});

const openCardForEdit = (card) => {
  cardForEdit.value = Object.assign({}, card);
  const cardEdit = document.getElementById("edit");
  cardEdit.classList.add("open");
};

const updateCard = (card) => {
  cardForEdit.value = card;
};

const cancelSave = () => {
  const cardEdit = document.getElementById("edit");
  cardEdit.classList.remove("open");
};

const saveCard = () => {
  const newCard = Object.assign({}, cardForEdit.value);
  cards.value = cards.value.map((el) => (el.id === newCard.id ? newCard : el));
  const cardEdit = document.getElementById("edit");
  cardEdit.classList.remove("open");
};
</script>

<style>
@import "./assets/global.css";
.display {
  display: none;
}

.open {
  position: absolute;
  z-index: 1000;
  left: 413px;
  top: 141px;
  display: block;
}

.cont {
  position: relative;
}

.loading-par {
  font-size: 50px;
  font-weight: 600;
}
</style>