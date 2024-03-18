<template>
  <div class="edit__cont display" id="edit">
    <form @submit.prevent class="edit__cont-form">
      <p class="edit__cont-label">Редактирование курса</p>
      <p class="edit__cont-course-name-input-label">Название курса:</p>
      <input
        class="input-style edit__cont-course-name-input"
        type="text"
        :value="card.name"
        @input="setName"
      />
      <p class="edit__cont-course-description-input-label">Описание курса:</p>
      <input
        class="input-style edit__cont-course-description-input"
        type="text"
        :value="card.discription"
        @input="setDiscription"
      />
      <button @click="cancelSave" class="btn-reset edit__cont-cross">
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
              fill="#0F0F0F"
            ></path>
          </g>
        </svg>
      </button>
      <div class="edit__cont-btn-cont">
        <button @click="saveCard" type="submit" class="edit__cont-save-btn">Сохранить</button>
        <button @click="cancelSave" type="submit" class="edit__cont-cancel-btn">Отменить</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  card: {
    type: Object,
  }
});

const emit = defineEmits(["set-new-course", "save-card", "cancel"]);

const cancelSave = () => {
  emit("cancel")
}

const saveCard = () => {
  emit("save-card");
};

const setName = (event) => {
  const data = Object.assign({}, props.card);
  data.name = event.target.value;
  emit("set-new-course", data);
};

const setDiscription = (event) => {
  const data = Object.assign({}, props.card);
  data.discription = event.target.value;
  emit("set-new-course", data);
};
</script>

<style>
.btn-reset {
  padding: 0;
  border: none;
  border-color: transparent;
  cursor: pointer;
  background-color: #fff;
  position: absolute;
  right: 3px;
  top: 3px;
}
.edit__cont {
  width: 314px;
  height: 240px;
  border: 1px solid #999999;
  padding: 10px;
  border-radius: 10px;
  padding-top: 30px;
  position: relative;
  background: #fff;
}

.edit__cont-form {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 28px;
}

.edit__cont-save-btn {
  max-width: 130px;
  background-color: #3db919;
  border: 1px solid #333;
  border-radius: 15px;
  padding: 5px 15px;
}

.edit__cont-cancel-btn {
  max-width: 130px;
  border: 1px solid #333;
  border-radius: 15px;
  padding: 5px 15px;
}

.edit__cont-btn-cont {
  display: flex;
  align-items: center;

  justify-content: space-between;
  max-width: 255px;
  padding-left: 29px;
  padding-top: 17px;
}

.edit__cont-label {
  font-weight: 700;
  font-size: 20px;
  margin: 0;
  padding-bottom: 10px;
}

.edit__cont-course-name-input-label {
  margin: 0;
  padding-bottom: 10px;
}

.edit__cont-course-description-input-label {
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
}

.input-style {
  border-radius: 10px;
  border: 1px solid #333;
  padding: 5px 10px;
}

.display {
  display: none;
}
</style>