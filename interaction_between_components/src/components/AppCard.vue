<template>
  <div class="card-cont">
    <div class="card-cont__card" v-if="card.isActive">
      <div class="card-cont__card-is-active">
        <h2 class="card-cont__title">
          {{ card.name }}
        </h2>
        <p class="card-cont__desc">Описание: {{ card.discription }}</p>
      </div>
    </div>
    <div v-else class="card-cont__not-active-card">
      <p class="card-cont__not-active-par">
        Кажется, курс уже не существует...
      </p>
    </div>
  </div>
</template>

<script setup>
const prop = defineProps({
  card: {
    type: Object,
  },
  index: {
    type: Number,
  },
});
</script>

<style>
.card-cont__card {
  border-radius: 15px;
  background-color: #f5f5f5;
  max-width: 535px;
  padding: 28px 25px;
  margin-bottom: 20px;
}

.card-cont__card:not(:nth-child(2n)) {
  margin-right: 20px;
}

.card-cont__card:nth-child(5n) {
  box-sizing: border-box;
  max-width: 535px;
  height: 30px;
  padding: 0;
}

.card-cont__card:nth-child(6n) {
  box-sizing: border-box;
  max-width: 535px;
  height: 30px;
  padding: 0;
}

.card-cont__card:nth-child(7n) {
  box-sizing: border-box;
  max-width: 535px;
  height: 30px;
  padding: 0;
}

.card-cont__not-active-card {
  border-radius: 15px;
  background-color: #f5f5f5;
  max-width: 535px;
  padding: 28px;
  padding-right: 85px;
  margin-bottom: 20px;
  margin-right: 20px;
}

.card-cont__not-active-par {
  margin: 0;
  font-size: 20px;
  color: #fac0bd;
  font-weight: 400;
}

.card-cont__card:not(:last-child) {
  margin-bottom: 25px;
}

.card-cont {
  display: flex;
  flex-wrap: wrap;
  max-width: 1250px;
}

.card-cont__title {
  margin: 0;
}

.card-cont__time {
  margin: 0;
}

.card-cont__desc {
  max-width: 398px;
}

.card-cont__card-is-active {
  height: 138px;
}
</style>