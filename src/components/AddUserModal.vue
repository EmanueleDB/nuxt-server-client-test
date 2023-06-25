<template>
  <b-modal
    id="addUserModal"
    class="modal"
    :hide-footer="true"
    :hide-header="true"
  >
    <form @submit.prevent="saveUser()">
      <div class="flexcard">
        <div class="flexcard__header">
          <div class="col-12">
            <div class="header">
              <h3>
                {{ this.id.email ? 'Edit User' : 'New user' }}
              </h3>
              <font-awesome-icon
                class="fa-lg cancel"
                icon="fa-regular fa-circle-xmark"
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
              <input type="checkbox" v-model="user.hasPets" />
              Has Pets
            </label>
          </div>
          <div class="col-12">
            <b-btn type="submit" variant="success" class="float-right"
              >Add</b-btn
            >
          </div>
        </div>
      </div>
    </form>
  </b-modal>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'AddUserModal',
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        hasPets: false,
      },
    }
  },
  props: {
    id: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.getUser()
  },
  methods: {
    saveUser() {
      this.$emit('save', this.user)
      this.$emit('close')
    },
    getUser() {
      if (this.id.email) this.user = this.id
    },
    closeModal() {
      this.user = {
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        hasPets: false,
      }
      this.$emit('close')
    },
  },
})
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
