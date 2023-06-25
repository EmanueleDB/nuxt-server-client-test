<template>
  <div class="users row">
    <div class="col-12">
      <h1>List of users</h1>
    </div>
    <div class="col-12 mb-2">
      <b-btn
        v-b-modal.addUserModal
        class="float-right"
        variant="primary"
        @click="addUser"
        >Add user</b-btn
      >
    </div>
    <div class="col-12">
      <b-table striped hover :items="users" :fields="fields" class="text-center"
        ><template #cell(actions)="{ item }">
          <span>
            <font-awesome-icon
              v-b-tooltip.hover.top="'Delete'"
              class="delete"
              icon="fa-trash-can"
              @click="deleteUser(item)"
            />
          </span>
          <span>
            <font-awesome-icon
              v-b-modal.addUserModal
              v-b-tooltip.hover.top="'Edit'"
              class="ml-2 edit"
              icon="fa-edit"
              @click="editUser(item)"
            />
          </span>
        </template>
        <template #cell(hasPets)="{ item }">
          <font-awesome-icon v-if="item.hasPets" icon="fa-solid fa-check" />
          <font-awesome-icon v-else icon="fa-regular fa-circle-xmark" />
        </template>
      </b-table>
    </div>
    <AddUserModal
      v-if="showModal"
      @close="showModal = false"
      @save="saveUser"
      :id="id"
    />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'
import AddUserModal from '~/components/AddUserModal.vue'
import unbind from '~/utils/unbind'

const users = ref([])
const fields = ['firstName', 'lastName', 'email', 'age', 'hasPets']
const showModal = ref(false)
const id = ref({})

const fetchUsers = async () => {
  try {
    const response = await axios.get(window.location.origin + '/usersList')
    if (response) users.value = response.data
  } catch (e) {
    console.log(e)
  }
}

const deleteUser = async (user) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/user?email=${user.email}`
    )
    if (response) await fetchUsers()
  } catch (e) {
    console.log(e)
  }
}

const addUser = () => {
  id.value = {}
  showModal.value = true
}

const editUser = (user) => {
  id.value = unbind(user)
  showModal.value = true
}

const saveUser = async (user) => {
  try {
    const response = await axios({
      url: 'http://localhost:3000/user',
      method: Object.keys(id.value).length > 0 ? 'PATCH' : 'POST',
      data: user,
    })
    if (response) await fetchUsers()
  } catch (e) {
    console.log(e)
  }
}

onMounted(fetchUsers)
</script>

<style lang="scss">
users {
  .table > tbody > tr > td {
    vertical-align: middle;
  }
  .delete {
    cursor: pointer;
    color: var(--primary);
  }
  .edit {
    cursor: pointer;
  }
}
</style>
