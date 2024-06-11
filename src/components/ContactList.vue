<template>
    <div class="max-w-md mx-auto">
      <h1 class="text-2xl font-bold mb-4">Lista de Contatos</h1>
      <router-link to="/add" class="text-blue-500 mb-4 inline-block">Adicionar Novo Contato</router-link>
      <ul>
        <li v-for="contact in contacts" :key="contact.id" class="mb-2 flex justify-between items-center">
          <router-link :to="'/contact/' + contact.id" class="text-blue-700">{{ contact.name }}</router-link>
          <button @click="deleteContact(contact.id)" class="bg-green-500 text-white px-2 py-1 rounded">Apagar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
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
      deleteContact(id: number) {
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]') as Contact[];
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        this.contacts = updatedContacts;
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
  