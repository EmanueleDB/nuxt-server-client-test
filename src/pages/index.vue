<template>
  <div class="users row">
    <div class="col-12">
      <h1>List of users</h1>
    </div>
    <div class="col-12 mb-2">
      <BButton class="float-right" variant="primary" @click="addUser"
        >Add user</BButton
      >
    </div>
    <div class="col-12">
      <b-table striped hover :items="users" :fields="fields" class="text-center"
        ><template #cell(actions)="{ item }">
          <span>
            <FontAwesomeIcon
              class="delete"
              icon="fa-trash-can"
              @click="deleteUser(item)"
            />
          </span>
          <span>
            <FontAwesomeIcon
              class="ml-2 edit"
              icon="fa-edit"
              @click="editUser(item)"
            />
          </span>
        </template>
        <template #cell(hasPets)="{ item }">
          <FontAwesomeIcon v-if="item.hasPets" icon="fa-solid fa-check" />
          <FontAwesomeIcon v-else icon="fa-solid fa-circle-xmark" />
        </template>
      </b-table>
    </div>
    <AddUserModal
      :id="id"
      :model-value="showModal"
      @close="showModal = false"
      @save="saveUser"
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
    const response = await axios.get('/api/users')
    if (response) users.value = response.data
  } catch (e) {
    console.log(e)
  }
}

const deleteUser = async (user) => {
  try {
    const response = await axios.delete(`/api/user?email=${user.email}`)
    if (response) await fetchUsers()
  } catch (e) {
    console.log(e)
  }
}

const addUser = () => {
  showModal.value = true
  id.value = {}
}

const editUser = (user) => {
  showModal.value = true
  id.value = unbind(user)
}

const saveUser = async (user) => {
  try {
    const response = await axios({
      url: '/api/user',
      method: 'POST',
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
