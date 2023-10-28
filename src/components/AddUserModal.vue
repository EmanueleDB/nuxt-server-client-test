<template>
  <BModal
    :model-value="modelValue"
    class="modal"
    :hide-footer="true"
    :hide-header="true"
  >
    <form id="addUser" @submit.prevent="saveUser()">
      <div class="flexcard">
        <div class="flexcard__header">
          <div class="col-12">
            <div class="header">
              <h3>
                {{ id.email ? 'Edit User' : 'New user' }}
              </h3>
              <FontAwesomeIcon
                class="fa-lg cancel"
                icon="fa-solid fa-circle-xmark"
                @click="closeModal"
              />
            </div>
          </div>
        </div>
        <div class="flexcard__body">
          <div class="col-12">
            <input
              v-model="user.firstName"
              type="text"
              class="flexcard__body__input mb-1"
              placeholder="First Name"
            />
          </div>
          <div class="col-12">
            <input
              v-model="user.lastName"
              type="text"
              class="flexcard__body__input mb-1"
              placeholder="Last Name"
            />
          </div>
          <div class="col-12">
            <input
              v-model="user.email"
              type="email"
              class="flexcard__body__input mb-1"
              placeholder="E-mail"
            />
          </div>
          <div class="col-12">
            <input
              v-model="user.age"
              type="number"
              class="flexcard__body__input mb-1"
              placeholder="Age"
            />
          </div>
          <div class="col-12">
            <label>
              <input v-model="user.hasPets" type="checkbox" />
              Has Pets
            </label>
          </div>
          <div class="col-12">
            <BButton type="submit" variant="success" class="float-right"
              >Add</BButton
            >
          </div>
        </div>
      </div>
    </form>
  </BModal>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { IUser } from '~/server/api/users/types'

const user = ref({
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  hasPets: false,
})
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  id: {
    type: Object as PropType<IUser>,
    required: true,
  },
})
const emit = defineEmits(['save', 'close'])

onMounted(() => {
  getUser()
})

const saveUser = () => {
  emit('save', user.value)
  closeModal()
}

const getUser = () => {
  if (props.id?.email) this.user = this.id
}

const closeModal = () => {
  user.value = {
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    hasPets: false,
  }
  emit('close')
}
</script>

<style lang="scss">
#addUserModal___BV_modal_content_ {
  border-radius: 20px;
  .flexcard__body {
    &__input {
      width: 100%;
      border: unset;
      border-radius: 5px;
      padding: 10px;
      background-color: var(--primary);
      font-size: 12px;
      box-sizing: border-box;
    }
  }
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
    cursor: pointer;
  }
  .cancel {
    color: red;
  }
}
</style>
