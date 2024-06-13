<template>
  <div class="max-w-lg mx-auto">
    <h1 class="text-2xl font-bold mb-4">Lista de Contatos</h1>
    <router-link to="/add" class="text-blue-500 mb-12 inline-block">Adicionar Novo Contato</router-link>
    <ul>
      <li v-for="contact in contacts" :key="contact.id" class="mb-2 flex justify-between items-center">
        <router-link :to="'/contact/' + contact.id" class="text-blue-700">{{ contact.name }}</router-link>
        <div class="flex space-x-2">
        <button @click="editContact(contact.id)" class="bg-blue-600 text-white px-2 py-1 rounded">Editar Contato</button>
        <button @click="confirmDelete(contact.id)" class="bg-green-500 text-white px-2 py-1 rounded">Apagar</button>
      </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Swal from 'sweetalert2';

interface Contact {
  id: number;
  name: string;
  phone: string;
}

export default defineComponent({
  data() {
    return {
      contacts: [] as Contact[]
    };
  },
  created() {
    this.loadContacts();
  },
  methods: {
    loadContacts() {
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]') as Contact[];
      this.contacts = contacts;
    },
    confirmDelete(id: number) {
      Swal.fire({
        title: 'Tem certeza que deseja apagar o contato?',
        text: "Essa ação não poderá ser revertida!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3daf7c',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Tenho certeza',
        cancelButtonText: 'Cancelar',
        iconColor: '#FF7F50'

      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteContact(id);
          Swal.fire({
            title:'Apagado!',
            text:'Seu contato foi apagado.',
            icon: 'success',
            confirmButtonColor: '#3daf7c'
        })
        }
      })
    },
    deleteContact(id: number) {
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]') as Contact[];
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      this.contacts = updatedContacts;
    },
    editContact(id:number){
      this.$router.push(`/edit/${id}`);
    }
  }
});
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

button {
  margin-left: 10px;
}
</style>
