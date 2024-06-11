<template>
    <div class="max-w-md mx-auto">
      <h1 class="text-2xl font-bold mb-4">Adicionar Novo Contato</h1>
      <form @submit.prevent="addContact" class="space-y-4">
        <div>
          <label for="name" class="block mb-1">Nome:</label>
          <input id="name" v-model="newContact.name" required class="border rounded p-2 w-full" />
        </div>
        <div>
          <label for="phone" class="block mb-1">Telefone:</label>
          <input id="phone" v-model="newContact.phone" required class="border rounded p-2 w-full" />
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Adicionar</button>
      </form>
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
        newContact: {
          name: '',
          phone: ''
        } as Partial<Contact>
      };
    },
    methods: {
      addContact() {
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]') as Contact[];
        const newId = contacts.length ? contacts[contacts.length - 1].id + 1 : 1;
        contacts.push({
          id: newId,
          ...this.newContact
        } as Contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.newContact = { name: '', phone: '' };
        this.$router.push('/');
      }
    }
  });
  </script>
  